---
layout: home

hero:
  name: 华通云前端文档
  text: 前端一站式规范.
  image:
    src: /logo.svg
    alt: LOGO
  actions:
    - theme: brand
      text: 开始
      link: /start
    - theme: alt
      text: jxk 函数
      link: https://www.jixiaokang.com/jxk
features:
  - icon: 🛠️
    title: 规范
    details: 华通云前端统一规范.
  - icon: 📦
    title: 封装
    details: 华通云前端组件使用.
  - icon: 🚀
    title: 先进
    details: 先进技术最新研究.
---



:::tabs
== jxk
<h1 align="center">jxk 函数工具库</h1>

<p align="center">
  jxk (意为： 极致、小巧、快捷) 的函数工具库，包含了常用的函数
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/jxk">
    <img src="https://img.shields.io/npm/v/jxk?color=orange&label=" alt="版本" />
  </a>
  <a href="https://github.com/qmhc/jxk/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/jxk" alt="许可证" />
  </a>
</p>

<h1 >
  <a href="https://www.jixiaokang.com/jxk/playground">
    游乐场🎠演示
  </a>
</h1>

**中文** | [English](./README.en.md)

## 目录

* [简介](#简介)
* [安装](#安装)
* [使用](#使用)
* [函数](#函数)
* [贡献](#贡献)
* [许可](#许可)

## 简介

`jxk`(意为： 极速、小巧、快捷) 库旨在为开发人员提供一系列便捷工具，可以在客户端和服务器端的 JavaScript 环境中使用。它包括处理对象和数组、字符串操作、类型检查等功能的常用函数。

## 安装

要使用 `jxk` ，您可以通过 npm 进行安装：

```bash
pnpm add jxk
```

```bash
yarn add jxk
```

```bash
npm i jxk
```

## 使用

安装后，您可以在项目中导入库：

```javascript
import jxk from 'jxk';

// Or if you are using a function:
import {
    sm4
} from 'jxk';
```

## 函数

所有函数请访问：[https://www.jixiaokang.com/jxk/](https://www.jixiaokang.com/jxk/)

以下是 `jxk` 库中包含的一些函数列表：

## HTML 标签处理

- **browser_decode**: HTML 标签反转义。
  - **用途**: 将 HTML 实体转换回原始字符。
  - **示例**:
    ```javascript
    browser_decode('&lt;p&gt;Hello&lt;/p&gt;'); // 返回 "<p>Hello</p>"
    ```

- **browser_encode**: HTML 标签转义。
  - **用途**: 将特殊字符转换为 HTML 实体以防止 XSS 攻击。
  - **示例**:
    ```javascript
    browser_encode('<p>Hello</p>'); // 返回 "&lt;p&gt;Hello&lt;/p&gt;"
    ```

## 加密算法

- **sm2**: SM2 国密算法，包括生成密钥对、加密、解密、签名、验签等功能。
- **sm3**: SM3 消息摘要算法。
- **sm4**: SM4 加密和解密功能。

## 时间格式化

- **time_date**: 格式化时间，参考文档为 [date-fns](https://date-fns.p6p.net/)。
- **time_format**: 格式化时间。

## 地址分析

- **analysis_address**: 省、市、区分析提取。
- **analysis_idcard**: 对身份证号解析。

## 数组处理

- **array_chunk**: 根据指定大小将数组分割成二维数组。
  - **示例**:
    ```javascript
    array_chunk([1, 2, 3, 4, 5], 2); // 返回 [[1, 2], [3, 4], [5]]
    ```

- **array_concat**: 合并数组。
  - **示例**:
    ```javascript
    array_concat([1, 2], [3, 4]); // 返回 [1, 2, 3, 4]
    ```

- **array_countOccurrences**: 统计数组中各项出现的次数。
  - **示例**:
    ```javascript
    array_countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'banana']);
    // 返回 { apple: 2, banana: 3, orange: 1 }
    ```

- **array_diffBoth**: 数组的差集。
- **array_diffFirst**: 取第一个数组的差集。
- **array_durstenfeldShuffle**: Durstenfeld 随机洗牌算法。
- **array_findIndex**: 查找数组中匹配的索引。
- **array_findObj**: 查找数组中匹配的值。
- **array_findParent**: 在数组中获取指定子 ID 的祖级数据。
- **array_findParent (另一个)**: 在 Tree 中获取指定子 ID 的祖级数据。
- **array_flatten**: 将多维数组拍平为一维数组。
- **array_fromTree**: 将树形结构转换为扁平化的数组。
- **array_groupBy**: 数组数据分组。
- **array_intersection**: 计算两个数组的交集。
- **array_keyBy**: 数组按 key 排序。
- **array_max**: 计算数组中的最大值。
- **array_merge**: 合并多个数组并返回它们的并集。
- **array_min**: 计算数组中的最小值。
- **array_omitBy**: 从数组中排除指定标签的项。
- **array_paging**: 对数组进行分页。
- **array_pick**: 从数组中选择指定标签的项。
- **array_randomItem**: 随机取数组中的元素。
- **array_remove**: 根据元素删除。
- **array_sattoloShuffle**: Sattolo 洗牌算法。
- **array_shuffle**: 数组随机排序（俗称洗牌）。
- **array_sort**: 排序。
- **array_sumBy**: 数组求和。
- **array_toMapByKey**: 根据某个键的值将数组转换为 Map 对象。
- **array_toTree**: 将数组转换为树形结构。
- **array_uniqWith**: 数组去重。
- **array_unique**: 数组去重。
- **array_uniqueByField**: 对象数组根据某个字段去重。

## 浏览器操作

- **browser_copyText**: 复制文本。
  - **示例**:
    ```javascript
    browser_copyText('Hello, world!');
    ```
== vite-plugin-git-version
<h1 align="center">vite-plugin-git-version</h1>

<p align="center">
  一个专注于生成 Git 项目打包信息的 Vite 插件。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-git-version">
    <img src="https://img.shields.io/npm/v/vite-plugin-git-version?color=orange&label=" alt="版本" />
  </a>
  <a href="https://github.com/qmhc/vite-plugin-git-version/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/vite-plugin-git-version" alt="许可证" />
  </a>
</p>

## 更适合与华通云开发工具搭配使用

[Microsoft Store 下载](https://microsoftedge.microsoft.com/addons/detail/%E5%8D%8E%E9%80%9A%E4%BA%91%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/afmbapanbkfkkpknjdepbafobedckoeg?hl=zh-CN)

[使用文档](https://wt-front-end.github.io/wt-docs/wt-edge.html)

从 `package.json` 获取 `version` 信息，并在打包时自动将版本文件 `version.json` 放入项目 dist 文件夹。

```json
// package.json
{
  // ...
  "name": "vite-plugin-git-version",
  "version": "1.0.0"
}
```
```json
// dist/version.json
{
  "name": "vite-plugin-git-version",
  "version": "1.0.0",
  "branch": "(HEAD -> main, origin/main, origin/HEAD)",
  "hash": "3e85fdd2e0aeac7685e3d20da16ff979440cbcb8",
  "commitUser": "xkloveme (xkloveme@gmail.com)",
  "commitContent": "chore: 更新README和package.json中的依赖信息\n更新版本\nchore: release v1.0.4",
  "time": "2024-08-09 22:13:11"
}
```

## 安装
```bash
pnpm add vite-plugin-git-version
```

```bash
yarn add vite-plugin-git-version
```

```bash
npm i vite-plugin-git-version
```

在您的 `vite.config.ts` 或 `vite.config.js` 中添加插件：

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import VersionGitPlugin from 'vite-plugin-git-version'

export default defineConfig({
  plugins: [
    VersionGitPlugin(),
  ],
})

```
== vue-cli-plugin-git-version

# vue-cli-plugin-git-version

[![version][npm-img]][npm-url]
[![license][mit-img]][mit-url]
[![size][size-img]][size-url]
[![download][download-img]][download-url]

为 Vue CLI 项目生成 version.json 文件，包含项目版本和 Git 信息。

## 安装

```sh
# 使用 npm
npm install -D vue-cli-plugin-git-version

# 使用 yarn
yarn add -D vue-cli-plugin-git-version

# 使用 pnpm
pnpm add -D vue-cli-plugin-git-version
```

## 使用方法

### Vue CLI 项目

在您的 Vue CLI 项目的 `vue.config.js` 文件中添加以下配置：

```javascript
const GenBuildInfoWebpackPlugin = require('vue-cli-plugin-git-version');

module.exports = {
  configureWebpack: {
    plugins: [
      new GenBuildInfoWebpackPlugin()
    ]
  }
}
```

这将在构建过程中自动生成 `version.json` 文件。

### 自定义选项

您可以自定义输出文件的目录和文件名：

```javascript
new GenBuildInfoWebpackPlugin({
  fileDir: 'path/to/custom/directory',
  fileName: 'custom-version.json'
})
```

## 输出示例

生成的 `version.json` 文件内容示例：

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "branch": "main",
  "hash": "abcdef1234567890",
  "commitUser": "xkloveme (xkloveme@example.com)",
  "commitContent": "Latest commit message",
  "time": "2023-04-10 15:30:45"
}
```

## 在项目中使用生成的信息

您可以在项目中读取生成的 `version.json` 文件来使用这些信息：

```javascript
import versionInfo from 'public/version.json';

console.log('当前版本:', versionInfo.version);
console.log('构建时间:', versionInfo.time);
```

== watone console
<h1 align="center">watone console</h1>

<p align="center">
  @watone/console 是一个为移动浏览器设计的控制台工具。它提供了类似于浏览器控制台的功能,可以在移动设备上方便地查看日志、错误等信息。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@watone/console">
    <img src="https://img.shields.io/npm/v/@watone/console?color=orange&label=" alt="版本" />
  </a>
  <a href="https://github.com/qmhc/@watone/console/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@watone/console" alt="许可证" />
  </a>
</p>

主要特性:
- 支持常见的控制台方法 (log, error, warn 等)
- 可自定义样式和行为
- 适配移动设备屏幕

```bash
npm install @watone/console --save
# or
pnpm  add @watone/console --save
# or
yarn install @watone/console --save
```

:::



<!-- badges -->

[author-url]: https://github.com/xkloveme

[mit-img]: https://img.shields.io/npm/l/vue-cli-plugin-git-version.svg?style=flat&colorA=000000&colorB=000000
[mit-url]: ./LICENSE

[npm-img]: https://img.shields.io/npm/v/vue-cli-plugin-git-version?style=flat&colorA=000000&colorB=000000
[npm-url]: https://www.npmjs.com/package/vue-cli-plugin-git-version

[size-img]: https://img.shields.io/bundlephobia/minzip/vue-cli-plugin-git-version?label=bundle&style=flat&colorA=000000&colorB=000000
[size-url]: https://www.npmjs.com/package/vue-cli-plugin-git-version

[download-img]: https://img.shields.io/npm/dt/vue-cli-plugin-git-version.svg?style=flat&colorA=000000&colorB=000000
[download-url]: https://www.npmjs.com/package/vue-cli-plugin-git-version

[build-img]: https://github.com/SolidZORO/vue-cli-plugin-git-version/workflows/badge.svg
[build-url]: https://github.com/SolidZORO/vue-cli-plugin-git-version/actions