---
title: CSS 开发指南
---
# CSS 开发指南

## 前言

`CSS` 在使用过程中常用遵循以下规范:

1.`class` 应以功能或内容命名，不以表现形式命名

2.`class` 与 `id` 单词字母小写，多个单词组成时，采用中划线-分隔

3.在使用中我们经常会使用`Less`或者`Scss`, 注意嵌套

4.属性顺序
- 定位属性（`position`、`display`、`float`、`left`、`right`）
- 尺寸属性（`width`、`height`、`padding`、`margin`、`border`）
- 字体属性（`color`、`font`、`text-align`）
- 其他属性（`background`、`cursor`、`outline`）

5.尽可能少用 `!importent`

6.`vue` 单文件组件统一使用 `css`/`less`/`sass` `scoped`

7.每个页面/组件需要有一个全局唯一的标识 `id`/`class`，属于它下面的样式都需要加上该唯一标识

8.避免全局修改已有样式，必须具体到页面上(通过权重)

9.禁用全匹配*选择器（特殊情况除外，如初始化）

10.`vue` 单文件组件修改样式不生效可使用 `/deep/` 或 `>>>`

11.手机端使用`rem`,`100px=1rem`

## 一、命名规范
### 1、文件均归档至约定的目录中
>（所有的`CSS`分为两大类：通用类和业务类。）

通用类的`CSS`文件，放在如下目录中：

``` js
1、核心样式库 /css/core
2、公用样式库 /css/lib
3、组件样式库 /css/ui
```

 业务类的`CSS`文件，放在如下目录中：

``` js
1、/css/modules/cart
2、/css/modules/member
3、/css/modules/pay
```

### 2、文件引入方式（内联和外联）

```js
外联方式： （类型声明 type=”text/css” 统一省略）
内联方式： （类型声明 type=”text/css” 统一省略且尽量不要使用此方式）
```
### 3、文件名、文件编码
::: warning 说明
文件名必须由小写字母、数字及中划线组成（起名用英文单词、不到万不得已禁止用拼音）
文件编码必须使用UTF-8（非BOM），如在HTML文档中指定了该编码则在CSS文档中不需要再次声明（@charset “utf-8”）
:::

::: danger 命名规范
``` js
1、使用约定俗成或有意义的英文单词来对id及class进行命名，不到万不得已禁止使用拼音
2、全部小写，多个单词使用中划线连接（如： class=”cart-list-info”）
3、缩写要使用通俗易懂的，切记自造
4、严禁使用标签进行命名
5、禁止通过1、2、3等序号进行命名
6、避免id与class重名
7、id应用来标识模块或页面中某个父容器的区域，不要随便新建id
8、命名尽可能提高代码模块的复用
9、不到万不得已名称中禁止出现包含颜色（red、blue）、定位（left、right）等具体显示效果的信息（样式确定下来基本不会改动的除外）
10、可为选择器添加状态前缀或后缀（如：.no-post、submit-btn-disabled）
11、Javascript钩子尽量使用id属性
```
:::
## 二、注释规范

### 1、文件顶部注释

```js
/*
* @description: 中文描述
* @author: 创建人
* @update: 修改人 (2021-04-09 10:00)
*/
```
### 2、模块注释

```js
/* module: 模块名 by 维护人 */
…
（中间必须空一行）
/* module: 模块名 by 维护人 */
…
```
### 3、单行注释与多行注释
``` js
单行注释：
/* 注释内容 */
多行注释：
/*
* 注释内容
* 注释内容
*/
```
## SASS 规范
> 嵌套顺序

- 当前选择器的样式属性
- 父级选择器的伪类选择器 (:first-letter, :hover, :active etc)伪类元素 (:before and :after)
- 父级选择器的声明样式 (.selected, .active, .enlarged etc.)
- 用 Sass 的上下文媒体查询
- 子选择器作为最后的部分
``` js
.product-teaser {
  // 1. Style attributes
  display: inline-block;
  padding: 1rem;
  background-color: whitesmoke;
  color: grey;

  // 2. Pseudo selectors with parent selector
  &:hover {
    color: black;
  }

  // 3. Pseudo elements with parent selector
  &:before {
    content: "";
    display: block;
    border-top: 1px solid grey;
  }

  &:after {
    content: "";
    display: block;
    border-top: 1px solid grey;
  }

  // 4. State classes with parent selector
  &.active {
    background-color: pink;
    color: red;

    // 4.2. Pseuso selector in state class selector
    &:hover {
      color: darkred;
    }
  }

  // 5. Contextual media queries
  @media screen and (max-width: 640px) {
    display: block;
    font-size: 2em;
  }

  // 6. Sub selectors
  > .content > .title {
    font-size: 1.2em;

    // 6.5. Contextual media queries in sub selector
    @media screen and (max-width: 640px) {
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
  }
}
```
## 三、其它规范

### 代码优化
``` js
合并`margin`、`padding`、`border`的`-top`/`-right`/`-bottom`/`-left`的设置
禁止使用*选择符
除非必须，否则，一般有`class`或`id`的，不需要再协商元素对应的标签
0后面不需要单位，如`0px`可以省略成0，`0.8s`可以省略成`.8s`
使用16进制表示颜色，则颜色取值需要使用小写
颜色尽可能用三位字符表示，如`#ff6600`写成`#f60`
设置没有边框时，不要写成`border: 0`，必须写成`border: none`
```
### 编写顺序
```js
显示属性：`display`，`visibility`
位置属性：`position`，`top`，`float`等
盒子模型：`width`，`height`，`margin`，`padding`，`border`
文字系列：`font`，`line-height`，`color`，`text-align`，`letter-spacing`，`white-space`等
背景属性：`background`
其他属性：`cursor`，`z-index`，`overflow`等
css3属性：`border-radius`，`box-shadow`，`transform`，`transition`，`animation`等
css3属性需要加入浏览器厂商前缀需按照`-webkit-` / `-moz-` / `std`的顺序进行添加
链接的样式需严格按照如下顺序添加：`a:link` -> `a:visited` -> `a:hover` -> `a:active`
```

## 重置样式

> 移动端
``` js
* { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }
img { border: 0 none; vertical-align: top; }
i, em { font-style: normal; }
ol, ul { list-style: none; }
input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }
table { border-collapse: collapse; border-spacing: 0; }
a { text-decoration: none; color: #666; }
body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: -apple-system,Helvetica,sans-serif; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }
input[type="text"], textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
```
> PC端
``` js
html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }
ul, ol { list-style: none; }
img { border: 0 none; vertical-align: top; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: none; }
table { border-collapse: collapse; border-spacing: 0; }
strong, em, i { font-style: normal; font-weight: normal; }
ins { text-decoration: underline; }
del { text-decoration: line-through; }
mark { background: none; }
input::-ms-clear { display: none !important; }
body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }
a { text-decoration: none; color: #333; }
a:hover { text-decoration: underline; }
```