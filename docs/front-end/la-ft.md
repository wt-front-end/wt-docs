<!--
 * @Author: xkloveme
 * @Date: 2022-03-03 09:18:05
 * @LastEditTime: 2022-03-03 09:24:15
 * @LastEditors: xkloveme
 * @Description: 临安二期防逃
 * @FilePath: /wt-docs/docs/front-end/la-ft.md
 * @Copyright © xkloveme
-->
# 临安区出国（境）管理监督系统

## 平台简介

- 本仓库为前端技术栈 [Vue3](https://v3.cn.vuejs.org) + [Element Plus](https://element-plus.org/zh-CN) + [Vite](https://cn.vitejs.dev) 版本。
- 配套后端代码仓库地址[RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue) 或 [RuoYi-Vue-fast](https://github.com/yangzongzhuan/RuoYi-Vue-fast) 版本。
- 前端技术栈（[Vue2](https://cn.vuejs.org) + [Element](https://github.com/ElemeFE/element) + [Vue CLI](https://cli.vuejs.org/zh)），请移步[RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue/tree/master/ruoyi-ui)。

## 运行

> 推荐使用`yarn`或`pnpm`

```bash
# 安装`yarn`或`pnpm`
npm i -g yarn
# OR
npm i -g pnpm
# 克隆项目
git clone XXX

# 进入项目目录
cd 项目目录

# 安装依赖
yarn --registry=https://registry.npm.taobao.org

# 启动服务
yarn dev

# 构建测试环境 yarn build:stage
# 构建生产环境 yarn build:prod
# 前端访问地址 http://localhost:2022
```

## 接口使用

> 注意不要重复接口名称,不然会被覆盖

- 1.方案 1(推荐)

```js
import $api from './api';
function getTreeselect() {
  $api.treeselect().then(response => {
    deptOptions.value = response.data;
  });
}
```

2. 方案 2

```js
import { treeselect } from '@/api/system/dept';

/** 查询部门下拉树结构 */
function getTreeselect() {
  treeselect().then(response => {
    deptOptions.value = response.data;
  });
}
```

## 大屏开发说明

### 屏幕适配

> 屏幕适配方案使用了 `Vue2` 版本的 `rem` 方案和通用的 `css3：scale` 缩放方案，，并在`dataV`中项目的基准尺寸是 `1920px*1080px`，所以支持用比例屏幕 `100%` 填充，如果非同比例则会自动计算比例居中填充，不足的部分则留白,实现代码在 `wt-screen` 中。在页面使用 rem 方案比例为`100px`为`1rem`,只在`big`和`dataV`路由下生效

### 大屏开发规范说明

> 大屏开发过程中,需要遵循以下规范

#### 1.大屏分为两种模式:

- [x] `/big`路由下为巨屏拼接,需要三个页面,目前比例为`2:3:2`,进入规则为`/big/左边/中间/右边`,拼接而成,左中右可以互换,对应`src/views/dataV`下面的文件夹名称,会读取文件夹下`index.vue`文件渲染到页面
- [x] `/dataV`路由下为单个大屏预览,进入规则为`/dataV/文件夹名称`

#### 2.静态资源如何使用

- [x] 静态资源需要放置在`src/assets/dataV`文件夹下,需要在对应的屏建立对应的文件夹,尽量压缩图片体积大小

#### 3.开发编写规范

```js
// echarts使用动态计算大小
const { proxy } = getCurrentInstance();
// 当屏幕为1920*1080时返回值为50px
proxy.$fontSize(0.5)

// 例:当屏幕为1920*1080时返回值为26px
axisLabel: {
  show: true,
  textStyle: {
    color: "#ffffff",
    fontSize: proxy.$fontSize(0.26),
  },
  align: "center",
}
```

```html
<!-- css切换字体全局样式 -->
<!-- 普通字.light-font 系统默认字体  -->
<div class="light-font">
  <div>
    <!--  发光的数字.light-font-number 一般在大屏的数字上和title上 -->
    <div class="light-font-number">
      <div>
        <!-- 会闪动的字.glow-font 需要闪烁的字体-->
        <div class="glow-font"><div></div></div>
      </div>
    </div>
  </div>
</div>
```

- [x] 大屏开发采用`vite+vue3+setup语法糖`,基础图表已经封装需使用`wt-chart`
- [x] 采用`echarts 5`,`rem`,`flex`,`grid`布局
- [x] 所有宽高,字体均不允许使用`px`需要使用`rem`,`1rem`=`100px`
- [x] `3*7`个`1920*1080`个屏幕 开发分辨率左`1280*1080` 中 `1920*1080` 右`1280*1080`,同时需要`1280*1080`兼容到`1920*1080`
- [x] 组件写样式必须添加`scoped`,避免污染其他相似文件
- [x] 把图表文件抽离,数据,图表配置在组件里做,外层只做数据接入,减少当前文件长度,提高可读性
- [x] 当数据接口没有或者调用失败需要,需要写入假数据,图表不能为空
- [x] 接口调用统一采用`$api`形式,单独请求,不要一个接口挂,所有图表展示不出来

## 时间处理函数

```html
<el-table-column label="执行时间" align="center" prop="createTime" width="180">
  <template #default="scope">
    <span>{{ parseTime(scope.row.createTime) }}</span>
  </template>
</el-table-column>
```

## 工具使用

```js
// proxy获取,下同
const { proxy } = getCurrentInstance();
```

### $tab 对象

> $tab 对象用于做页签操作、刷新页签、关闭页签、打开页签、修改页签等，它定义在 plugins/tab.js 文件中，它有如下方法

- 打开页签

```js
proxy.$tab.openPage('用户管理', '/system/user');
proxy.$tab.openPage('用户管理', '/system/user').then(() => {
  // 执行结束的逻辑
});
```

- 修改页签

```js
const obj = Object.assign({}, this.$route, { title: '自定义标题' });
proxy.$tab.updatePage(obj);

proxy.$tab.updatePage(obj).then(() => {
  // 执行结束的逻辑
});
```

- 关闭页签

```js
// 关闭当前tab页签，打开新页签
const obj = { path: '/system/user' };
proxy.$tab.closeOpenPage(obj);

// 关闭当前页签，回到首页
proxy.$tab.closePage();

// 关闭指定页签
const obj = { path: '/system/user', name: 'User' };
proxy.$tab.closePage(obj);

proxy.$tab.closePage(obj).then(() => {
  // 执行结束的逻辑
});
```

- 刷新页签

```js
// 刷新当前页签
proxy.$tab.refreshPage();

// 刷新指定页签
const obj = { path: '/system/user', name: 'User' };
proxy.$tab.refreshPage(obj);

proxy.$tab.refreshPage(obj).then(() => {
  // 执行结束的逻辑
});
```

- 关闭所有页签

```js
proxy.$tab.closeAllPage();

proxy.$tab.closeAllPage().then(() => {
  // 执行结束的逻辑
});
```

- 关闭左侧页签

```js
proxy.$tab.closeLeftPage();

const obj = { path: '/system/user', name: 'User' };
proxy.$tab.closeLeftPage(obj);

proxy.$tab.closeLeftPage(obj).then(() => {
  // 执行结束的逻辑
});
```

- 关闭右侧页签

```js
proxy.$tab.closeRightPage();

const obj = { path: '/system/user', name: 'User' };
proxy.$tab.closeRightPage(obj);

proxy.$tab.closeRightPage(obj).then(() => {
  // 执行结束的逻辑
});
```

- 关闭其他 tab 页签

```js
proxy.$tab.closeOtherPage();

const obj = { path: '/system/user', name: 'User' };
proxy.$tab.closeOtherPage(obj);

proxy.$tab.closeOtherPage(obj).then(() => {
  // 执行结束的逻辑
});
```

### $modal 对象

> $modal 对象用于做消息提示、通知提示、对话框提醒、二次确认、遮罩等，它定义在 plugins/modal.js 文件中，它有如下方法

- 提供成功、警告和错误等反馈信息

```js
proxy.$modal.msg('默认反馈');
proxy.$modal.msgError('错误反馈');
proxy.$modal.msgSuccess('成功反馈');
proxy.$modal.msgWarning('警告反馈');
```

- 提供成功、警告和错误等提示信息

```js
proxy.$modal.alert('默认提示');
proxy.$modal.alertError('错误提示');
proxy.$modal.alertSuccess('成功提示');
proxy.$modal.alertWarning('警告提示');
```

- 提供成功、警告和错误等通知信息

```js
proxy.$modal.notify('默认通知');
proxy.$modal.notifyError('错误通知');
proxy.$modal.notifySuccess('成功通知');
proxy.$modal.notifyWarning('警告通知');
```

- 提供确认窗体信息

```js
proxy.$modal.confirm('确认信息').then(function() {
  ...
}).then(() => {
  ...
}).catch(() => {});
```

- 提供遮罩层信息

```js
// 打开遮罩层
proxy.$modal.loading('正在导出数据，请稍后...');

// 关闭遮罩层
proxy.$modal.closeLoading();
```

### $auth 对象

> $auth 对象用于验证用户是否拥有某（些）权限或角色，它定义在 plugins/auth.js 文件中，它有如下方法

- 验证用户权限

```js
// 验证用户是否具备某权限
proxy.$auth.hasPermi('system:user:add');
// 验证用户是否含有指定权限，只需包含其中一个
proxy.$auth.hasPermiOr(['system:user:add', 'system:user:update']);
// 验证用户是否含有指定权限，必须全部拥有
proxy.$auth.hasPermiAnd(['system:user:add', 'system:user:update']);
```

- 验证用户角色

```js
// 验证用户是否具备某角色
proxy.$auth.hasRole('admin');
// 验证用户是否含有指定角色，只需包含其中一个
proxy.$auth.hasRoleOr(['admin', 'common']);
// 验证用户是否含有指定角色，必须全部拥有
proxy.$auth.hasRoleAnd(['admin', 'common']);
```

### $download 对象

> $download 对象用于文件下载，它定义在 plugins/download.js 文件中，它有如下方法

- 根据名称下载 download 路径下的文件

```js
const name = 'be756b96-c8b5-46c4-ab67-02e988973090.xlsx';
const isDelete = true;

// 默认下载方法
proxy.$download.name(name);

// 下载完成后是否删除文件
proxy.$download.name(name, isDelete);
```

- 根据名称下载 upload 路径下的文件

```js
const resource =
  '/profile/upload/2021/09/27/be756b96-c8b5-46c4-ab67-02e988973090.png';

// 默认方法
proxy.$download.resource(resource);
```

- 根据请求地址下载 zip 包

```js
const url = '/tool/gen/batchGenCode?tables=' + tableNames;
const name = 'ruoyi';

// 默认方法
proxy.$download.zip(url, name);
```

- 更多文件下载操作

```js
// 自定义文本保存
var blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
proxy.$download.saveAs(blob, 'hello world.txt');

// 自定义文件保存
var file = new File(['Hello, world!'], 'hello world.txt', {
  type: 'text/plain;charset=utf-8'
});
proxy.$download.saveAs(file);

// 自定义data数据保存
const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
proxy.$download.saveAs(blob, name);

// 根据地址保存文件
proxy.$download.saveAs('https://ruoyi.vip/images/logo.png', 'logo.jpg');
```

## 权限使用

使用权限字符串 v-hasPermi OR v-auth

```html
// 单个
<el-button v-hasPermi="['system:user:add']">存在权限字符串才能看到</el-button>
// 多个
<el-button v-hasPermi="['system:user:add', 'system:user:edit']"
  >包含权限字符串才能看到</el-button
>
```

使用角色字符串 v-hasRole

```html
// 单个
<el-button v-hasRole="['admin']">管理员才能看到</el-button>
// 多个
<el-button v-hasRole="['role1', 'role2']">包含角色才能看到</el-button>
```

> 在某些情况下，它是不适合使用 v-hasPermi，如元素标签组件，只能通过手动设置 v-if。 可以使用全局权限判断函数，用法和指令 v-hasPermi 类似。

```html
<template>
  <el-tabs>
    <el-tab-pane
      v-if="checkPermi(['system:user:add'])"
      label="用户管理"
      name="user"
      >用户管理</el-tab-pane
    >
    <el-tab-pane
      v-if="checkPermi(['system:user:add', 'system:user:edit'])"
      label="参数管理"
      name="menu"
      >参数管理</el-tab-pane
    >
    <el-tab-pane v-if="checkRole(['admin'])" label="角色管理" name="role"
      >角色管理</el-tab-pane
    >
    <el-tab-pane
      v-if="checkRole(['admin','common'])"
      label="定时任务"
      name="job"
      >定时任务</el-tab-pane
    >
  </el-tabs>
</template>
```

## 使用图标

全局 Svg Icon 图标组件。

默认在 `@/icons/index.js` 中注册到全局中，可以在项目中任意地方使用。所以图标均可在 `@/icons/svg` 。可自行添加或者删除图标，所以图标都会被自动导入，无需手动操作。

```html
<!-- icon-class 为 icon 的名字; class-name 为 icon 自定义 class-->
<svg-icon icon-class="password" class-name="custom-class" />
```

> 如果你是从 iconfont (opens new window)下载的图标，记得使用如 Sketch 等工具规范一下图标的大小问题，不然可能会造成项目中的图标大小尺寸不统一的问题。 本项目中使用的图标都是 128\*128 大小规格的。

## 使用字典

字典管理是用来维护数据类型的数据，如下拉框、单选按钮、复选框、树选择的数据，方便系统管理员维护。主要功能包括：字典分类管理、**字典数据管理**

### 加载字典

1. 获取字典

```js
const { sys_normal_disable } = proxy.useDict('sys_normal_disable');
```

2. 读取字典

```html
<el-select
  v-model="queryParams.status"
  placeholder="角色状态"
  clearable
  size="small"
  style="width: 240px"
>
  <el-option
    v-for="dict in sys_normal_disable"
    :key="dict.value"
    :label="dict.label"
    :value="dict.value"
  />
</el-select>
```

3. 字典翻译

```js
/** 任务组名字典翻译 */
function jobGroupFormat(row, column) {
  return proxy.selectDictLabel(sys_job_group.value, row.jobGroup);
}
```

```html
<el-form-item label="任务分组：">{{ jobGroupFormat(form) }}</el-form-item>
```

## 若依官方

- admin/admin123

演示地址：http://vue.ruoyi.vip
文档地址：http://doc.ruoyi.vip
