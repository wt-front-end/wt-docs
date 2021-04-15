# VS Code

VS Code 毫无疑问是目前最强大的编辑器，没有之一，凭借自身丰富的插件体系以及优秀的断点调试能力迅速成为最火热的编辑器。

## 安装 VS Code

这个不多介绍，直接去[官网](https://code.visualstudio.com/)下载安装包安装

## code 命令

打开 VS Code，打开控制面板（⇧⌘P）, 输入 `shell command` ，在提示里看到 `Shell Command: Install "code" command in PATH`，运行它就可以了。

然后，在终端里，通过 `code .` 或 `code xx` 直接打开目录或文件。

## 快捷键

熟练使用 VS Code 快捷键是必备技能

### 左边栏快捷键

`cmd + k, cmd + s` -> 点击右上角工具栏第二个按钮(打开键盘快捷方式(JSON))-> `keybinds.json`

添加以下配置

```json
({
  "key": "cmd+1",
  "command": "workbench.view.explorer"
},
{
  "key": "cmd+2",
  "command": "workbench.view.search"
},
{
  "key": "cmd+3",
  "command": "workbench.view.scm"
},
{
  "key": "cmd+4",
  "command": "workbench.view.debug"
},
{
  "key": "cmd+5",
  "command": "workbench.view.extensions"
})
```

添加完毕后我们可以通过 cmd + 数字键的组合方式来快速切换左边栏

### 其他快捷键

以下介绍实际使用 VS Code 中经常需要用到的快捷键

- `cmd + p` 根据关键字快速打开一个文件
- `cmd + ,` 打开 VS Code 配置项
- `cmd + d` 快速选取多个相同的内容块
- `option + shift + 鼠标左键` 让光标多行选取
- `cmd + shift + h` 全局替换内容

## VSCode 设置

这里附上个人的 VSCode 设置，契合绝大多数前端开发的需求，并且忽略不必要的设置防止 VSCode CPU 占用过高

```json
{
  // 编译器
  "editor.fontFamily": "'Cascadia Code','FuraMono Nerd Font', 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.renderControlCharacters": true,
  "editor.fontSize": 14,
  "editor.minimap.maxColumn": 80,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // 自动保存files
  "files.autoSave": "onFocusChange",
  "files.trimFinalNewlines": true,
  "files.associations": {
    "*.wpy": "vue",
    "*.html": "html",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/tmp/**": true,
    "**/bower_components/**": true,
    "**/dist/**": true
  },
  "files.exclude": {
    // 是否显示这些文件(夹)
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/tmp": true,
    // "**/node_modules": true,
    "**/bower_components": true
    // "**/dist": true
  },
  //  让函数(名)和后面的括号之间加个空格 js
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // 控制台
  "terminal.integrated.fontFamily": "FuraMono Nerd Font",
  "terminal.integrated.fontSize": 18,
  // 代码格式化
  "vetur.validation.template": false,
  "vetur.format.defaultFormatterOptions": {
    "js": "vscode-typescript", // prettier-eslint || vscode-typescript
    "js-beautify-html": {
      "wrap_line_length": 300,
      "wrap_attributes": "auto",
      "end_with_newline": false
    },
    "prettyhtml": {
      "printWidth": 300,
      "singleQuote": false,
      "wrapAttributes": false,
      "sortAttributes": true
    },
    // --- 解决问题 ---
    "prettier": {
      "semi": false,
      "singleQuote": true
    }
    // --- 解决问题 ---
  },
  "workbench.sideBar.location": "right",
  "workbench.activityBar.visible": true,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.tree.indent": 20,
  "workbench.tree.renderIndentGuides": "always",
  "workbench.settings.editor": "json",
  // emmet
  "emmet.includeLanguages": {
    "wxml": "html",
    "javascript": "javascriptreact"
  },
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  },
  "emmet.triggerExpansionOnTab": true,
  // 刷题
  "leetcode.endpoint": "leetcode-cn",
  "leetcode.workspaceFolder": "/Users/lorialex/.leetcode",
  "leetcode.hint.configWebviewMarkdown": false,
  "leetcode.hint.commentDescription": false,
  "leetcode.defaultLanguage": "javascript",
  "leetcode.hint.commandShortcut": false,
  "window.newWindowDimensions": "fullscreen",
  // console 打印配置
  "turboConsoleLog.quote": "'",
  "turboConsoleLog.logMessagePrefix": "🐛",
  "terminal.integrated.shell.osx": "/bin/zsh",
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "cSpell.userWords": [
    "utools"
  ],
  "workbench.colorTheme": "escook dark soft",
  "git.confirmSync": false,
  "cSpell.enableFiletypes": [
    "python"
  ],
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "extensions.ignoreRecommendations": true,
  "tabnine.experimentalAutoImports": true,
  "i18n-ally.displayLanguage": "zh-CN",
  "explorer.confirmDelete": false,
  "stylelint.autoFixOnSave": true,
  "standard.autoFixOnSave": true,
  "search.followSymlinks": false,
  "explorer.confirmDragAndDrop": false,
}
```

## 插件

在这里我们介绍前端开发中需要经常用到的一些插件,很多插件的功能VSCode已经内置了，我们安装之前需要查询一下相关资料不要重复安装使得臃肿

- `Code Spell Checker` 帮助我们检查名词的拼写
- `GitLens` 展示该代码块的 commit 信息
- `vscode-icons` 为不同的文件设置不同的 ICON
- `Markdown Preview` 预览 md 文件
- `StandardJS` JavaScript 代码规范配套的 VS Code 插件，下面我们会介绍为什么使用 standardjs 而不是 eslint
- `stylelint-plus` 配合"extends": "stylelint-config-standard"，所有的规范都按 standard 的来
- `React Standard Style` 同上，在 React 组件中使用 standardjs 代码规范
- `Minify` 自动生成经过 uglify 后的文件
- Api[Vetur](https://github.com/vuejs/vetur)
- [Tabnine 智能 AI](https://www.tabnine.com/) [「安装地址」](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)

## 主题

推荐使用`One Dark Pro`配合`vscode-icons`更佳
安装后 setting 添加如下配置开启

```json
"workbench.colorTheme": "One Dark Pro",
"workbench.iconTheme": "vscode-icons"
```
