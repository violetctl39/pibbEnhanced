# pibbEnhanced - SCUPI Blackboard Assignment Enhancer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.3.5-blue.svg)](https://github.com/violetctl39/pibbEnhanced)
[![GreasyFork](https://img.shields.io/badge/GreasyFork-Install-brightgreen.svg)](https://greasyfork.org/zh-CN/scripts/537754-pibbenhanced)
[![UserScript](https://img.shields.io/badge/UserScript-Tampermonkey%20%7C%20Violentmonkey-orange.svg)](https://www.tampermonkey.net/)
[![GitHub Stars](https://img.shields.io/github/stars/violetctl39/pibbEnhanced?style=social)](https://github.com/violetctl39/pibbEnhanced)

**SCUPI Blackboard Assignment Enhancer** | **四川大学匹兹堡学院作业截止日期增强器**

专为四川大学匹兹堡学院 (SCUPI) Blackboard 系统设计的 Tampermonkey 用户脚本，将标准页面模块转换为动态"作业截止日期"显示界面，为学生提供清晰便捷的即将到来的作业截止日期概览。

**Author | 作者**: [violetctl39](https://github.com/violetctl39)

## 🚀 Features | 特性

- ⚡ **Ultra-Fast Assignment Tracking** | **极速作业跟踪**：Real-time countdown timers with color-coded urgency indicators for immediate deadline visibility | 实时倒计时定时器，配有颜色编码的紧急程度指示器，立即显示截止日期
- 🎯 **Precise Module Replacement** | **精确模块替换**：Seamlessly replaces "Academic Materials & Tools" module with dedicated "Assignment Deadline" interface | 无缝替换"学术材料与工具"模块为专用"作业截止日期"界面
- 📋 **Smart Assignment Integration** | **智能作业集成**：Fetches assignment data from Blackboard calendar with direct course page links | 从 Blackboard 日历获取作业数据，包含直接课程页面链接
- 🔄 **Intelligent Data Management** | **智能数据管理**：Local database storage with manual completion tracking and recovery features | 本地数据库存储，支持手动完成跟踪和恢复功能
- 📊 **Real-time Status Updates** | **实时状态更新**：Live countdown updates every second with comprehensive deadline monitoring | 每秒实时倒计时更新，全面的截止日期监控
- 🎨 **Responsive Interface** | **响应式界面**：Adaptive design that works perfectly on different screen sizes | 自适应设计，在不同屏幕尺寸上完美工作
- 🛡️ **Safe & Reliable** | **安全可靠**：Local data storage only, no external servers, complete privacy protection | 仅本地数据存储，无外部服务器，完全隐私保护
- 📱 **Optimized Scrolling** | **优化滚动**：Only assignment list scrollable for enhanced user experience | 仅作业列表可滚动，增强用户体验
- 💾 **Smart Caching** | **智能缓存**：Automatic data caching with timeout and error handling mechanisms | 自动数据缓存，配有超时和错误处理机制

## 📸 Screenshot | 界面截图

<div align="center">

![pibbEnhanced Interface Demo](https://github.com/user-attachments/assets/f0aba21a-0679-47d9-889e-2750679f5be3)

*Real-time assignment deadline tracking with color-coded countdown timers | 实时作业截止日期跟踪，配有颜色编码的倒计时器*

</div>

The above screenshot shows the enhanced Assignment Deadline module in action, displaying:
- Real-time countdown timers with color coding
- Assignment titles and course information
- Mark Complete functionality
- Refresh button for manual updates

上图展示了增强的作业截止日期模块的实际效果，包括：
- 带颜色编码的实时倒计时器
- 作业标题和课程信息
- 标记完成功能
- 手动更新的刷新按钮

## 📦 Installation | 安装方法

### 🚀 Method 1: Install from GreasyFork (Recommended) | 方法一：从 GreasyFork 安装（推荐）
1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension | 安装 Tampermonkey 浏览器扩展
2. Click to install: [📥 Install from GreasyFork](https://greasyfork.org/zh-CN/scripts/537754-pibbenhanced) | 点击从 GreasyFork 安装脚本
3. GreasyFork will automatically redirect to Tampermonkey for installation | GreasyFork 会自动重定向到 Tampermonkey 进行安装

### 🔧 Method 2: Install from GitHub | 方法二：从 GitHub 安装
1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension | 安装 Tampermonkey 浏览器扩展
2. Click to install: [📥 Install Script](https://github.com/violetctl39/pibbEnhanced/raw/main/pibbEnhanced.js) | 点击安装脚本
3. Tampermonkey will automatically detect and prompt to install | Tampermonkey 会自动检测并提示安装

### 🛠️ Method 3: Manual Installation | 方法三：手动安装
1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension | 安装 Tampermonkey 浏览器扩展
### 🛠️ Method 3: Manual Installation | 方法三：手动安装
1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension | 安装 Tampermonkey 浏览器扩展
2. Copy the [script source code](https://github.com/violetctl39/pibbEnhanced/raw/main/pibbEnhanced.js) | 复制脚本源码
3. Create a new script in Tampermonkey dashboard and paste the code | 在 Tampermonkey 管理页面创建新脚本并粘贴代码

### 🌐 Alternative: Violentmonkey Support | 替代方案：Violentmonkey 支持
- Both [Tampermonkey](https://www.tampermonkey.net/) and [Violentmonkey](https://violentmonkey.github.io/) are supported | 同时支持 Tampermonkey 和 Violentmonkey
- Installation methods work with both userscript managers | 安装方法适用于两种用户脚本管理器

## 🔧 Usage | 使用方法

### ⚡ Quick Start | 快速开始
1. **Install** | **安装**: Install the script via Tampermonkey | 通过 Tampermonkey 安装脚本
2. **Navigate** | **导航**: Go to SCUPI Blackboard portal page | 进入川大匹院 Blackboard 门户页面
3. **Automatic** | **自动运行**: Script automatically replaces module and displays assignments | 脚本自动替换模块并显示作业
4. **Manage** | **管理**: Mark assignments as complete and track progress | 标记作业为完成并跟踪进度
5. **Refresh** | **刷新**: Use force refresh to update assignment data | 使用强制刷新更新作业数据

### Step 1: Automatic Module Replacement | 步骤一：自动模块替换
The script automatically identifies and replaces the "Academic Materials & Tools" module | 脚本自动识别并替换"学术材料与工具"模块：
- Module title changes to "Assignment Deadline" | 模块标题更改为"作业截止日期"
- Assignment list with real-time countdown timers | 带有实时倒计时的作业列表
- Color-coded urgency indicators | 颜色编码的紧急程度指示器

### Step 2: Monitor Assignment Status | 步骤二：监控作业状态
- ⏰ Live countdown timers update every second | 实时倒计时每秒更新
- 🔴 Red: Less than 1 day | 少于1天
- 🟠 Orange: 1-2 days | 1-2天
- 🟡 Yellow: 2-3 days | 2-3天
- 🟢 Green: 5-7 days | 5-7天
- ⚫ Gray: More than 7 days | 超过7天

### Step 3: Manage Completion Status | 步骤三：管理完成状态
- Click "Mark Complete" to hide finished assignments | 点击"标记完成"隐藏已完成作业
- Use recovery options to restore mistakenly marked assignments | 使用恢复选项恢复误标记的作业
- Force refresh preserves completion status while updating data | 强制刷新在更新数据时保持完成状态

### Step 4: Navigate to Course Pages | 步骤四：导航到课程页面
- Click assignment titles for direct course page access | 点击作业标题直接访问课程页面
- Seamless integration with Blackboard navigation | 与 Blackboard 导航无缝集成

## ⚡ Advanced Assignment Features | 高级作业功能

- **⚡ Real-time Updates** | **实时更新**：Second-by-second countdown precision with automatic status refresh | 秒级倒计时精度，自动状态刷新
- **🔄 Smart Data Sync** | **智能数据同步**：Automatic calendar integration with local storage backup for offline access | 自动日历集成，本地存储备份实现离线访问  
- **💾 Persistent Storage** | **持久化存储**：Local database with completion tracking that survives browser sessions | 本地数据库，完成跟踪在浏览器会话间保持
- **🎯 Intelligent Filtering** | **智能过滤**：Automatic display of current and upcoming assignments with past due indicators | 自动显示当前和即将到来的作业，包含过期指示器
- **⚡ Instant Recovery** | **即时恢复**：One-click restoration of mistakenly marked completed assignments | 一键恢复误标记完成的作业
- **🚀 Ultra-Fast Loading** | **超快加载**：Optimized DOM manipulation with minimal performance impact | 优化DOM操作，最小性能影响
- **📊 Status Monitoring** | **状态监控**：Built-in error handling and network timeout protection | 内置错误处理和网络超时保护

## 🔧 Workflow | 工作流程

1. **🔍 Module Detection** | **模块检测** → Automatically identifies "Academic Materials & Tools" module for replacement | 自动识别"学术材料与工具"模块进行替换
2. **📊 Data Fetching** | **数据获取** → Retrieves assignment data from Blackboard calendar API | 从 Blackboard 日历 API 检索作业数据
3. **🎯 Interface Generation** | **界面生成** → Creates dynamic assignment list with countdown timers | 创建带倒计时的动态作业列表
4. **⏰ Real-time Updates** | **实时更新** → Updates countdown timers and status indicators every second | 每秒更新倒计时和状态指示器
5. **💾 Data Persistence** | **数据持久化** → Saves completion status and assignment data locally | 本地保存完成状态和作业数据
6. **🔄 Auto Refresh** | **自动刷新** → Maintains data freshness with periodic updates | 通过定期更新保持数据新鲜度

## 📝 Data Structure Guide | 数据结构说明

### Assignment Object Structure | 作业对象结构
```javascript
{
    title: "Assignment Title",           // Assignment name | 作业名称
    calendarName: "Course Name",         // Course identifier | 课程标识
    end: "Due Date",                     // Deadline timestamp | 截止时间戳
    courseLink: "Course Link (optional)", // Direct course page URL | 直接课程页面URL
    id: "Unique Identifier"              // Assignment unique ID | 作业唯一ID
}
```

### Storage Configuration | 存储配置
```javascript
const DB_KEYS = {
    ASSIGNMENTS: 'pibbEnhanced_assignments',    // Assignment data cache | 作业数据缓存
    COMPLETED: 'pibbEnhanced_completed',        // Completion status | 完成状态
    LAST_UPDATE: 'pibbEnhanced_lastUpdate'     // Last update timestamp | 最后更新时间戳
};
```

### Color Coding System | 颜色编码系统

| Time Remaining | Color | Status | 剩余时间 | 颜色 | 状态 |
|----------------|-------|--------|----------|------|------|
| < 1 day | 🔴 Red | Critical | < 1天 | 🔴 红色 | 紧急 |
| 1-2 days | 🟠 Orange | Urgent | 1-2天 | 🟠 橙色 | 急迫 |
| 2-3 days | 🟡 Yellow | Warning | 2-3天 | 🟡 黄色 | 警告 |
| 5-7 days | 🟢 Green | Normal | 5-7天 | 🟢 绿色 | 正常 |
| > 7 days | ⚫ Gray | Future | > 7天 | ⚫灰色 | 未来 |

## ⚠️ Important Notes | 注意事项

1. **SCUPI System Specific** | **SCUPI系统专用**：Designed exclusively for SCUPI Blackboard (pibb.scu.edu.cn) | 专为SCUPI Blackboard设计（pibb.scu.edu.cn）
2. **Local Storage Only** | **仅本地存储**：All data stored locally, no external server communication | 所有数据本地存储，无外部服务器通信
3. **Module Replacement** | **模块替换**：Replaces "Academic Materials & Tools" module functionality | 替换"学术材料与工具"模块功能
4. **Manual Completion** | **手动完成**：Assignment completion must be marked manually by user | 作业完成必须由用户手动标记

## 🔍 Troubleshooting | 故障排除

### Common Issues | 常见问题

| Problem | Solution | 问题 | 解决方案 |
|---------|----------|------|----------|
| Module not replaced | Check if you're on the correct SCUPI Blackboard portal page | 模块未替换 | 检查是否在正确的SCUPI Blackboard门户页面 |
| Assignment data not loading | Verify network connection and Blackboard calendar access | 作业数据未加载 | 验证网络连接和Blackboard日历访问权限 |
| Countdown timers not updating | Refresh page, check Tampermonkey script status | 倒计时未更新 | 刷新页面，检查Tampermonkey脚本状态 |
| Firefox network connection error | Script v1.3.3+ has built-in Firefox compatibility fixes | 火狐浏览器网络连接错误 | 脚本 v1.3.3+ 内置火狐兼容性修复 |
| Firefox DOMException error | Upgrade to v1.3.3+ which fixes Unicode character handling | 火狐浏览器DOMException错误 | 升级到 v1.3.3+ 修复Unicode字符处理 |
| Script interface not displayed | Ensure you're on pibb.scu.edu.cn portal, reinstall if needed | 脚本界面未显示 | 确保在pibb.scu.edu.cn门户页面，必要时重新安装 |
| Completion status not saved | Check browser storage permissions and Tampermonkey grants | 完成状态未保存 | 检查浏览器存储权限和Tampermonkey授权 |
| Assignment recovery failed | Try force refresh to reload assignment database | 作业恢复失败 | 尝试强制刷新重新加载作业数据库 |

### FAQ | 常见问题解答

**Q: Is this script safe to use? | 这个脚本使用安全吗？**  
A: Yes, all data is stored locally and no external servers are contacted. Complete privacy protection. | 是的，所有数据本地存储，不接触外部服务器。完全隐私保护。

**Q: Will this work on other Blackboard systems? | 这能在其他Blackboard系统上工作吗？**  
A: No, this script is specifically designed for SCUPI Blackboard (pibb.scu.edu.cn) only. | 不能，此脚本专为SCUPI Blackboard（pibb.scu.edu.cn）设计。

**Q: How often does the assignment data update? | 作业数据多久更新一次？**  
A: The script fetches fresh data on each page load and provides force refresh options for manual updates. | 脚本在每次页面加载时获取新数据，并提供强制刷新选项进行手动更新。

**Q: What happens if I mark an assignment as complete by mistake? | 如果我误标记作业为完成怎么办？**  
A: Use the recovery feature to restore mistakenly marked completed assignments back to the active list. | 使用恢复功能将误标记完成的作业恢复到活动列表。

**Q: Where can I find the latest version? | 在哪里可以找到最新版本？**  
A: Latest version is available on both [GreasyFork](https://greasyfork.org/zh-CN/scripts/537754-pibbenhanced) and [GitHub](https://github.com/violetctl39/pibbEnhanced). | 最新版本在 GreasyFork 和 GitHub 上都可以找到。

**Q: Does the script affect Blackboard's original functionality? | 脚本会影响Blackboard的原始功能吗？**  
A: No, it only replaces one module display. All other Blackboard features remain unchanged. | 不会，它只替换一个模块显示。所有其他Blackboard功能保持不变。

**Q: Does the script work properly on Firefox? | 脚本在火狐浏览器上能正常工作吗？**  
A: Yes, version 1.3.3+ includes enhanced Firefox compatibility with DOMException fixes and cross-origin request support. | 是的，版本 1.3.3+ 包含增强的火狐兼容性，修复了 DOMException 错误和跨域请求支持。

## 📄 License | 许可证

This project is licensed under the [MIT License](LICENSE) | 本项目采用 [MIT 许可证](LICENSE) 开源。

## 🔧 Technical Specifications | 技术规格

- **Script Engine** | **脚本引擎**: Tampermonkey / Violentmonkey compatible
- **Target Website** | **目标网站**: `https://pibb.scu.edu.cn/webapps/portal/execute/*`
- **Browser Support** | **浏览器支持**: Chrome, Firefox, Edge, Safari (with Tampermonkey)
- **Performance** | **性能**: Real-time updates, minimal performance impact
- **File Size** | **文件大小**: ~25KB (optimized and commented)
- **Dependencies** | **依赖**: Tampermonkey API, modern browser ES6+ support
- **GreasyFork ID** | **GreasyFork ID**: 537754

## 📋 Changelog | 更新日志

### Version 1.3.5 (Latest) | 版本 1.3.5（最新）
- 🔄 **Module Target Update**: Updated to target "Academic Materials & Tools" module following SCUPI Blackboard interface changes | 模块目标更新：根据SCUPI Blackboard界面更新，改为定位"学术材料与工具"模块
- 📝 **Documentation Update**: Refreshed all documentation to reflect new module naming | 文档更新：刷新所有文档以反映新的模块命名

### Version 1.3.4 | 版本 1.3.4
- 🏗️ **DOM Structure Enhancement**: Fixed DOM structure warnings by ensuring proper #div_85_1 element creation and handling | DOM结构增强：通过确保正确的#div_85_1元素创建和处理修复DOM结构警告
- 🔧 **Improved Element Detection**: Enhanced collapsible container detection with automatic element creation fallbacks | 改进元素检测：增强可折叠容器检测，自动元素创建备选方案
- 🛡️ **Better Error Prevention**: Eliminated console warnings and improved module initialization reliability | 更好的错误预防：消除控制台警告，提高模块初始化可靠性
- 🎯 **Consistent Module Structure**: Ensures proper DOM hierarchy for optimal script functionality | 一致的模块结构：确保正确的DOM层次结构以实现最佳脚本功能

### Version 1.3.3 | 版本 1.3.3
- 🦊 **Firefox DOMException Fix**: Fixed Unicode character handling in ID generation to prevent DOMException errors | 火狐DOMException修复：修复ID生成中的Unicode字符处理，防止DOMException错误
- 🔧 **Improved btoa() Compatibility**: Added fallback hash method for browsers with strict Unicode handling | 改进btoa()兼容性：为严格Unicode处理的浏览器添加备用哈希方法
- 🌐 **Cross-Origin Permission Optimization**: Removed problematic wildcard connect permission | 跨域权限优化：移除有问题的通配符连接权限
- 🛡️ **Enhanced Error Handling**: Better error recovery for character encoding issues | 增强错误处理：更好的字符编码问题错误恢复

### Version 1.3.2 | 版本 1.3.2
- 🦊 **Enhanced Firefox Compatibility**: Fixed network connection issues in Firefox by using GM_xmlhttpRequest | 增强火狐兼容性：使用 GM_xmlhttpRequest 修复火狐浏览器网络连接问题
- 🔧 **Improved Error Handling**: Enhanced debugging information and error details for network requests | 改进错误处理：增强网络请求的调试信息和错误详情
- 🌐 **Cross-Origin Request Support**: Added comprehensive cross-origin permissions for better compatibility | 跨域请求支持：添加全面的跨域权限以提高兼容性
- 🛡️ **Compatibility Checking**: Built-in browser and Tampermonkey feature detection | 兼容性检查：内置浏览器和 Tampermonkey 功能检测

### Version 1.3.1 | 版本 1.3.1
- 🔄 **Network Request Optimization**: Replaced fetch() with GM_xmlhttpRequest for better cross-origin support | 网络请求优化：用 GM_xmlhttpRequest 替换 fetch() 以更好地支持跨域

### Version 1.3.0 | 版本 1.3.0
- ⚡ **Enhanced Database Storage**: Implemented comprehensive local database functionality | 增强数据库存储：实现全面的本地数据库功能
- 🔄 **Manual Completion Tracking**: Added manual assignment completion status tracking | 手动完成跟踪：增加手动作业完成状态跟踪
- 💾 **Assignment Recovery Features**: Introduced recovery options for mistakenly marked assignments | 作业恢复功能：引入误标记作业的恢复选项
- 🛡️ **Improved Error Handling**: Enhanced timeout and error feedback mechanisms | 改进错误处理：增强超时和错误反馈机制
- 🔄 **Auto Reload Functionality**: Automatic script reload when page content is overwritten | 自动重载功能：页面内容被覆盖时自动重载脚本
- 🎨 **Optimized User Interface**: Enhanced responsive design and user experience | 优化用户界面：增强响应式设计和用户体验

## 🤝 Contributing | 贡献

Issues and Pull Requests are welcome! | 欢迎提交 Issue 和 Pull Request！

- **Issues**: [Report bugs or request features](https://github.com/violetctl39/pibbEnhanced/issues) | 报告问题或请求功能
- **Pull Requests**: Help improve the code | 帮助改进代码
- **Discussions**: Share your experience | 分享使用经验

## 📧 Support | 支持

- **GreasyFork**: [Script Page & Reviews](https://greasyfork.org/zh-CN/scripts/537754-pibbenhanced) | 脚本页面和评价
- **GitHub Issues**: [Report problems](https://github.com/violetctl39/pibbEnhanced/issues) | 报告问题
- **Author**: [violetctl39](https://github.com/violetctl39) | 作者
- **Email**: Contact via GitHub | 通过 GitHub 联系

## 🌟 Star History | 星标历史

If this project helps you, please give it a ⭐️! | 如果这个项目对你有帮助，请给它一个 ⭐️！

---

**Version | 版本**: 1.3.5  
**Author | 作者**: [violetctl39](https://github.com/violetctl39)  
**License | 许可证**: MIT  
**GreasyFork**: [Install Script](https://greasyfork.org/zh-CN/scripts/537754-pibbenhanced) | [安装脚本](https://greasyfork.org/zh-CN/scripts/537754-pibbenhanced)  
**Compatible with | 适用于**: SCUPI Blackboard Portal System | 四川大学匹兹堡学院 Blackboard 门户系统

---

<div align="center">

**Made with ❤️ for SCUPI students**

**为SCUPI学生用心制作**

[![Install on GreasyFork](https://img.shields.io/badge/Install%20on-GreasyFork-green?style=for-the-badge&logo=javascript)](https://greasyfork.org/zh-CN/scripts/537754-pibbenhanced)

</div>
