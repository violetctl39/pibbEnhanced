# pibbEnhanced - SCUPI Blackboard Assignment Enhancer

`pibbEnhanced` is a UserScript that improves the SCUPI Blackboard portal by transforming a standard module into a dynamic "Assignment Deadline" display. This provides a clear and convenient overview of upcoming assignment deadlines.

## Features

*   **Assignment Deadline Module:** Replaces an existing page module (typically "On Demand Help") with a dedicated "Assignment Deadline" list.
*   **Data from Calendar:** Fetches assignment information (title, due date, course name) from your Blackboard calendar.
*   **Direct Course Links:** Where available, provides links directly to the relevant course page for each assignment.
*   **Live Countdowns:** Displays a real-time countdown timer for each assignment, showing exactly how much time is left.
*   **Color-Coded Urgency:** Countdown timers use different colors to indicate how soon an assignment is due, making it easy to see what needs attention.
*   **Relevant Assignments Shown:** Shows upcoming assignments and any assignments that were due earlier on the current day (these are marked "Past Due").
*   **Scrollable View:** If there are many assignments, the list becomes scrollable within the module.

## How to Install and Use

1.  **Install a UserScript Manager:**
    *   You need a browser extension that can manage UserScripts. Popular choices include:
        *   [Tampermonkey](https://www.tampermonkey.net/) 
        *   [Violentmonkey](https://violentmonkey.github.io/)

    *   Install one of these extensions in your preferred web browser.

2.  **Install the `pibbEnhanced` Script:**
    *   Go to the `pibbEnhanced.js` file (e.g., on GitHub or wherever you have it).
    *   Click on the "Raw" button or a direct installation link.
    *   Your UserScript manager should automatically detect the script and open a new tab or window asking if you want to install it.
    *   Review the script details and click "Install".

3.  **Using the Script:**
    *   Once installed, the script will run automatically when you visit the SCUPI Blackboard portal page.
    *   Look for the module titled "Assignment Deadline" (it replaces the "On Demand Help" module). This module will now display your assignments.

## Important Notes

*   This script is specifically designed for the SCUPI Blackboard (pibb.scu.edu.cn) website. It  CANNOT work correctly on other Blackboard systems or if the SCUPI Blackboard website's design changes significantly.
*   The script's functionality depends on the way SCUPI Blackboard provides calendar and course data.
*   This script was developed with the assistance of GitHub Copilot.
