// ==UserScript==
// @name         pibbEnhanced
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Refines SCU Blackboard module to display assignments. Ensures only the assignment list is scrollable, includes timeout/error feedback, and automatically reloads if page content overwrites script output.
// @author       Gilbert Chen
// @match        https://pibb.scu.edu.cn/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1
// @grant        none
// @run-at       document-idle
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    console.log('pibbEnhanced script started (v1.0).');

    const SCRIPT_CONTENT_ID = 'userscript-assignment-content';
    let isMainRunning = false;
    let currentObserver = null;
    const assignmentsUrl = 'https://pibb.scu.edu.cn/webapps/calendar/calendarData/selectedCalendarEvents';
    const courseLinksXMLUrl = 'https://pibb.scu.edu.cn/webapps/portal/execute/tabs/tabAction?action=refreshAjaxModule&modId=_2_1&tabId=_1_1&tab_tab_group_id=_1_1';

    class Assignment {
        constructor(title, calendarName, end, courseLink = null) {
            this.title = title;
            this.calendarName = calendarName;
            this.end = new Date(end);
            this.courseLink = courseLink;
        }
    }

    async function loadAssignments(url, timeout = 15000) {
        console.log(`Fetching assignments from: ${url} with ${timeout}ms timeout`);
        const controller = new AbortController();
        const signal = controller.signal;
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, { signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                let errorMsg = `Server returned error status: ${response.status}`;
                if (response.status === 500) {
                    errorMsg = "Internal Server Error (HTTP 500). Please try again later or check the server status.";
                } else if (response.status === 404) {
                    errorMsg = "Requested resource not found (HTTP 404). Please check if the URL is correct.";
                }
                console.error(errorMsg, response);
                return { success: false, errorType: 'httpError', message: errorMsg };
            }

            let jsonData;
            try {
                jsonData = await response.json();
            } catch (e) {
                console.error("Failed to parse JSON data:", e);
                return { success: false, errorType: 'invalidFormat', message: "Could not parse server response, format might not be valid JSON." };
            }

            if (!Array.isArray(jsonData)) {
                console.error("Fetched data is not an array:", jsonData);
                return { success: false, errorType: 'invalidFormat', message: "Incorrect data format from server (expected an array)." };
            }
            const assignments = jsonData.map(item => new Assignment(item.title, item.calendarName, item.end));
            return { success: true, data: assignments };

        } catch (error) {
            clearTimeout(timeoutId);
            if (error.name === 'AbortError') {
                console.error("Timeout loading assignments:", url);
                return { success: false, errorType: 'timeout', message: "Timeout loading assignment data. Please check your network connection or try again later." };
            } else {
                console.error("Failed to load or parse JSON file (network issue):", error);
                return { success: false, errorType: 'network', message: "Network connection error or server unresponsive. Please check your network and try again." };
            }
        }
    }

    async function loadCourseLinksFromXML(url, timeout = 10000) {
        console.log(`Fetching course links from XML: ${url} with ${timeout}ms timeout`);
        const controller = new AbortController();
        const signal = controller.signal;
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, { signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                console.error(`Error fetching XML: ${response.status} ${response.statusText} from ${url}`);
                return { success: false, errorType: 'httpError', message: `Failed to load course links XML: ${response.status}` };
            }

            const xmlString = await response.text();
            const parser = new DOMParser();
            const outerXmlDoc = parser.parseFromString(xmlString, "application/xml");

            const cdataNode = outerXmlDoc.querySelector('contents');
            if (!cdataNode || !cdataNode.firstChild || cdataNode.firstChild.nodeType !== Node.CDATA_SECTION_NODE) {
                console.error("CDATA section not found or invalid in XML from " + url);
                return { success: false, errorType: 'xmlFormatError', message: "Invalid XML structure: CDATA section missing." };
            }

            const htmlString = cdataNode.firstChild.nodeValue;
            const htmlDoc = parser.parseFromString(htmlString, "text/html");

            const courseLinksMap = new Map();
            const links = htmlDoc.querySelectorAll("ul.portletList-img li a");

            if (links.length === 0) {
                console.warn("No course links found in the XML content from " + url);
            }

            links.forEach(link => {
                const courseName = link.textContent.trim();
                const courseUrl = link.getAttribute("href");
                if (courseName && courseUrl) {
                    courseLinksMap.set(courseName, courseUrl.trim());
                } else {
                    console.warn("Found a link tag without proper course name or href in XML", link);
                }
            });
            return { success: true, data: courseLinksMap };

        } catch (error) {
            clearTimeout(timeoutId);
            if (error.name === 'AbortError') {
                console.error("Timeout fetching course links XML:", url);
                return { success: false, errorType: 'timeout', message: "Timeout fetching course links XML." };
            } else {
                console.error("Error loading or parsing course links XML:", error);
                return { success: false, errorType: 'parseError', message: "Error processing course links XML." };
            }
        }
    }

    function formatDateTime(date) {
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }

    function startIndividualCountdown(endDate, displayElement) {
        const update = () => {
            const now = new Date().getTime();
            const timeLeft = endDate.getTime() - now;

            if (timeLeft <= 0) {
                displayElement.textContent = 'Past Due';
                displayElement.style.color = '#757575';
                if (displayElement.intervalId) clearInterval(displayElement.intervalId);
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            let countdownText = days > 0 ? `${days}d ` : '';
            countdownText += `${hours}h ${minutes}min ${seconds}s`;
            displayElement.textContent = ` ${countdownText}`;

            const ONE_DAY_MS = 24 * 60 * 60 * 1000;
            const TWO_DAYS_MS = 2 * ONE_DAY_MS;
            const THREE_DAYS_MS = 3 * ONE_DAY_MS;
            const FIVE_DAYS_MS = 5 * ONE_DAY_MS;
            const SEVEN_DAYS_MS = 7 * ONE_DAY_MS;

            if (timeLeft < ONE_DAY_MS) {
                displayElement.style.color = '#D32F2F';
            } else if (timeLeft < TWO_DAYS_MS) {
                displayElement.style.color = '#E64A19';
            } else if (timeLeft < THREE_DAYS_MS) {
                displayElement.style.color = '#F57C00';
            } else if (timeLeft < FIVE_DAYS_MS) {
                displayElement.style.color = '#FFA000';
            } else if (timeLeft < SEVEN_DAYS_MS) {
                displayElement.style.color = '#689F38';
            } else {
                displayElement.style.color = '#555555';
            }
        };
        update();
        displayElement.intervalId = setInterval(update, 1000);
    }

    async function main() {
        if (isMainRunning) {
            console.log('main() is already running. Skipping this call.');
            return;
        }
        isMainRunning = true;
        console.log('Executing main()');

        try {
            const targetModule = document.getElementById('module:_27_1');
            if (!targetModule) {
                console.error('Target module "module:_27_1" not found.');
                return;
            }

            targetModule.style.boxSizing = 'border-box';

            const headerElement = targetModule.querySelector('h2.dragHandle.clearfix');
            if (headerElement) {
                const titleSpan = headerElement.querySelector('span.moduleTitle');
                if (titleSpan) {
                    titleSpan.textContent = 'Assignment Deadline';
                } else {
                    console.warn('span.moduleTitle not found in h2. Creating and prepending a new one.');
                    const newTitleSpan = document.createElement('span');
                    newTitleSpan.className = 'moduleTitle';
                    newTitleSpan.textContent = 'Assignment Deadline';
                    headerElement.prepend(newTitleSpan);
                }
                if (headerElement.nextElementSibling && headerElement.nextElementSibling.classList.contains('collapsible')) {
                    headerElement.style.marginBottom = '10px';
                }
            } else {
                console.warn('Original h2.dragHandle.clearfix header not found.');
            }

            let contentHostElement;
            let listContainer;
            const collapsibleDiv = targetModule.querySelector('div.collapsible#On_Demand_Help_Tools');

            if (collapsibleDiv) {
                contentHostElement = collapsibleDiv;
                contentHostElement.innerHTML = '';
                const innerDivForList = contentHostElement.querySelector('#div_27_1');
                if (innerDivForList) {
                    listContainer = innerDivForList;
                } else {
                    listContainer = contentHostElement;
                    console.warn('#div_27_1 not found within .collapsible. Using .collapsible itself as list container.');
                }
            } else {
                console.warn('div.collapsible#On_Demand_Help_Tools not found. Creating a new content host div.');
                contentHostElement = document.createElement('div');
                listContainer = contentHostElement;
                const refNodeForInsertion = headerElement || targetModule.querySelector('div.edit_controls');
                if (refNodeForInsertion && refNodeForInsertion.parentElement === targetModule) {
                    refNodeForInsertion.after(contentHostElement);
                } else {
                    targetModule.appendChild(contentHostElement);
                }
            }

            listContainer.innerHTML = '';
            const loadingMessageEl = document.createElement('p');
            loadingMessageEl.id = SCRIPT_CONTENT_ID;
            loadingMessageEl.textContent = 'Loading...';
            loadingMessageEl.style.padding = '10px';
            loadingMessageEl.style.textAlign = 'center';
            loadingMessageEl.style.margin = 'auto';
            listContainer.appendChild(loadingMessageEl);

            if (currentObserver) {
                currentObserver.disconnect();
            }
            currentObserver = new MutationObserver((mutationsList, obs) => {
                if (isMainRunning) {
                    return;
                }
                if (!document.getElementById(SCRIPT_CONTENT_ID)) {
                    console.log(`Userscript content (ID: ${SCRIPT_CONTENT_ID}) no longer in DOM. Re-initializing.`);
                    obs.disconnect();
                    currentObserver = null;
                    main().catch(e => console.error("Error during observer-triggered main() execution:", e));
                }
            });
            currentObserver.observe(listContainer, { childList: true, subtree: false });

            const loadResult = await loadAssignments(assignmentsUrl);

            const currentScriptContent = document.getElementById(SCRIPT_CONTENT_ID);
            if (!currentScriptContent || !listContainer.contains(currentScriptContent)) {
                console.warn("Userscript content (loading message) was removed from listContainer during data fetch. Observer will handle re-initialization.");
                return;
            }

            listContainer.innerHTML = '';

            if (loadResult.success) {
                const allAssignments = loadResult.data;

                const courseLinksResult = await loadCourseLinksFromXML(courseLinksXMLUrl);
                if (courseLinksResult && courseLinksResult.success) {
                    const courseLinksMap = courseLinksResult.data;
                    allAssignments.forEach(assignment => {
                        const fullCourseName = assignment.calendarName;
                        if (courseLinksMap.has(fullCourseName)) {
                            const partialLink = courseLinksMap.get(fullCourseName);
                            assignment.courseLink = 'https://pibb.scu.edu.cn' + partialLink;
                        }
                    });
                } else {
                    console.warn("Could not load or parse course links XML. Proceeding without them.", courseLinksResult ? courseLinksResult.message : "No result from loadCourseLinksFromXML");
                }

                const now = new Date();
                const todayYear = now.getFullYear();
                const todayMonth = now.getMonth();
                const todayDay = now.getDate();

                const assignmentsToDisplay = allAssignments.filter(assignment => {
                    const endDate = assignment.end;
                    const isUpcoming = endDate > now;

                    const isPastDueToday = endDate <= now &&
                        endDate.getFullYear() === todayYear &&
                        endDate.getMonth() === todayMonth &&
                        endDate.getDate() === todayDay;

                    return isUpcoming || isPastDueToday;
                }).sort((a, b) => a.end - b.end);

                if (assignmentsToDisplay.length > 0) {
                    const assignmentListWrapper = document.createElement('div');
                    assignmentListWrapper.id = SCRIPT_CONTENT_ID;
                    assignmentListWrapper.style.overflowY = 'auto';
                    let availableHeight = 350;
                    if (targetModule.style.maxHeight) {
                        availableHeight = parseInt(targetModule.style.maxHeight, 10);
                    }
                    let headerHeight = 0;
                    if (headerElement) {
                        headerHeight = headerElement.offsetHeight;
                    }
                    assignmentListWrapper.style.maxHeight = (availableHeight - headerHeight - 20) + 'px';

                    const list = document.createElement('ul');
                    list.style.listStyleType = 'none';
                    list.style.paddingLeft = '0';
                    assignmentsToDisplay.forEach(assignment => {
                        const listItem = document.createElement('li');
                        listItem.style.marginBottom = '15px';
                        listItem.style.padding = '10px';
                        listItem.style.border = '1px solid #eee';
                        listItem.style.borderRadius = '4px';

                        const titleEl = document.createElement('strong');
                        titleEl.textContent = assignment.title;
                        titleEl.style.display = 'block';
                        titleEl.style.fontSize = '1.1em';
                        titleEl.style.marginBottom = '5px';

                        const courseEl = document.createElement('div');
                        courseEl.style.fontSize = '0.9em';
                        courseEl.style.color = '#555';

                        if (assignment.courseLink) {
                            courseEl.appendChild(document.createTextNode('Course: '));
                            const link = document.createElement('a');
                            link.href = assignment.courseLink;
                            link.textContent = assignment.calendarName;
                            link.target = '_blank';
                            courseEl.appendChild(link);
                        } else {
                            courseEl.textContent = `Course: ${assignment.calendarName}`;
                        }

                        const endEl = document.createElement('div');
                        endEl.textContent = `Due: ${formatDateTime(assignment.end)}`;
                        endEl.style.fontSize = '0.9em';
                        endEl.style.fontWeight = 'bold';
                        endEl.style.color = '#555';

                        const countdownEl = document.createElement('div');
                        countdownEl.style.fontSize = '1.1em';
                        countdownEl.style.marginTop = '5px';
                        countdownEl.style.fontWeight = 'bold';

                        listItem.appendChild(titleEl);
                        listItem.appendChild(courseEl);
                        listItem.appendChild(endEl);
                        listItem.appendChild(countdownEl);
                        list.appendChild(listItem);
                        startIndividualCountdown(assignment.end, countdownEl);
                    });
                    assignmentListWrapper.appendChild(list);
                    listContainer.appendChild(assignmentListWrapper);
                } else {
                    const noAssignmentsMessage = document.createElement('p');
                    noAssignmentsMessage.id = SCRIPT_CONTENT_ID;
                    noAssignmentsMessage.textContent = 'No upcoming assignments! Enjoy your free time!';
                    noAssignmentsMessage.style.padding = '10px';
                    noAssignmentsMessage.style.textAlign = 'center';
                    listContainer.appendChild(noAssignmentsMessage);
                }
            } else {
                const errorMessageEl = document.createElement('p');
                errorMessageEl.id = SCRIPT_CONTENT_ID;
                errorMessageEl.textContent = `Error: ${loadResult.message}`;
                errorMessageEl.style.color = 'red';
                errorMessageEl.style.padding = '10px';
                errorMessageEl.style.textAlign = 'center';
                listContainer.appendChild(errorMessageEl);
                console.error(`Failed to load assignments: ${loadResult.errorType} - ${loadResult.message}`);
            }
        } catch (error) {
            console.error("Error in main function execution:", error);
        } finally {
            isMainRunning = false;
            console.log('main() execution finished.');
        }
    }

    main().catch(e => {
        console.error("Error during initial main() execution:", e);
        isMainRunning = false;
    });

})();
