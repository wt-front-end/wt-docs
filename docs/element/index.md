---
title: 组件 内部规范
---
# 内部规范

## 「API」 使用规范
::: tip 说明
所有文件调用需要挂载在`$api`下,方法写在`api`文件夹一级目录下,会自动注入
:::

### 1. 调用方式
- 「接口请求」自动封装挂载到`vue`实例上
```bash
// 获取用户列表
 this.$api.getUserList().then(res => {
        console.log('🐛:: handleClickUser -> res', res)
      })
```

### 2.接口书写命名格式

- 1. 为避免命名冲突导致请求错误,采用一下命名

```bash
/*
 * Api命名建议:
  * 组成: {请求方法}{文件名}{接口用处}{Api}
  * 1.请求方法(get查询, post增加, put修改, delete删除, upload上传)
  * 2.当前js所在文件名称如gen, login
  * 3.接口用处, 如userList, deviceDetail
  * 4.Api, 表明是Api接口, 区别于其他方法
  * 目的: 语义化明确, 看到接口就知道类型用处
  * 示例: getManageUserListApi(获取用户列表api), putLoginMsCaptchaApi(获取验证码api)
 */
```
- 2. 接口命名一律采用小驼峰命名法

- 3. 新书写接口推荐一下写法,极度精简,可读性高

```bash
// get 请求 用户列表
export const getManageGetUserApi = params => axios.get(api.user, { params })
// OR
export const getManageGetUserApi = params => axios.get('/system/user/list', { params })

// post 请求
export const postManageServiceApi = data => axios.get('/service', data)

// 切换请求方法
export const postManageServiceApi = data => axios[data.id === 0 ? 'post' : 'put']('/service', data)
```

- 4. 每个 api 前面需要添加中文注释

## 「权限」判断按钮级权限

### 1.自定义指令写法

```js
// 指令写法
<div v-auth="'system:dict:add'"></div>
// v-if写法
<div v-if="$pm('system:dict:add')"></div>
```

### 2.在`js`中使用

```js
// 挂载到`VM`实例上
this.$pm === checkPermission
```

## 「工具」常用工具封装

- 时间格式化封装,采用`dayJS`

```js

// 过滤器封装 YYYY-MM-DD
<div>{{time | date}}</div>

// 过滤器封装 YYYY-MM-DD HH:mm:ss
<div>{{time | datetime}}</div>

// 挂载到vue实例上
this.$formatDate(new Date())
// OR
this.$formatDate(new Date(),'YYYY-MM-DD')

```

## 「table」 封装,采用 jsx 书写方式
- 支持两种书写方式(直接传输数据和表头)

```js
// columns 列  tableData 表数据   params 默认请求数据
    <wt-table :columns="columns" :tableData="tableData" :params="params" ></wt-table>
```

- 支持传输接口和 api

```js
// columns 列  tableData 表数据   params 默认请求数据
    <wt-table :columns="columns" :api="$api.postManageServiceApi" :params="params" ></wt-table>
```

- 表格数据提供三种写法

1. 引入外部`js`,`table`表头数据,需要把`this`作为参数传进去

> 需要创建 `h` 函数,不然会报错,需要把`js`文件建立在同级目录便于管理

```js
// 外部数据
export default props => [
  {
    title: '序号',
    dataIndex: 'index',
    customRender: (text, row, index) => {
      const h = props.$createElement // 需要创建h函数
      return h('a', index + 1)
    }
  }
]

// 组件内部,需要把this传进去
import columns from './table.js'
columns: columns(this)
```

> 表格渲染支持四种写法

```html
<wt-table :columns="columns" :api="$api.getManageGetUserApi">
  <span slot="userName">11</span>
</wt-table>
```

```js
// 适用于普通标签,更改文字内容
 {
    title: '创建时间',
    dataIndex: 'createTime',
    customRender: (text, row, index) => {
      return {
        children: props.$formatDate(text)
      }
    }
  },
  // 适用于大多数,前提是使用足够熟练
  {
    title: '邮箱',
    dataIndex: 'email',
    customRender: (text, row, index) => {
      const h = props.$createElement
      return h('a', text)
    }
  },
   // 在HTML连绵写slot渲染,比较负责的处理逻辑,每个表格内容较多
   {
    title: '用户名',
    dataIndex: 'userName',
    scopedSlots: { customRender: 'userName' }
  },
  // 更简洁的写标签适用熟悉react
  {
    title: '备注',
    dataIndex: 'remark',
    customRender: (text, row, index) => {
      return <a>{text}</a>
    }
  }
```

2. 直接写在组件内部,但可能会造成单文件过长,不利于阅读

> 这种写法支持 `jsx` 形式,可以少些大部分代码「表格数据不多的时候推荐」

```js
columns: [
  {
    title: '创建时间',
    dataIndex: 'createTime',
    customRender: (text, row, index) => {
      return {
        children: this.$formatDate(text)
      }
    }
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    customRender: (text, row, index) => {
      return <a>{text}</a>
    }
  }
]
```

3. `mixins` 方式混入,同样可读性好,但此语法未来可能会废弃[不推荐]