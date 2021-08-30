---
title: 浙里办开发指南
---
# 浙里办嵌入前端h5微应用避坑指南


1，vue生产包请求静态资源报302，先排查部署到平台的.zip包中dist文件夹是否重命名为build，并且根目录必须有支持npm run build命令的package.json文件（尽量在本地打包完，将生产包按上述目录归放。不直接把src源代码压缩后使用平台支持的npm install & npm run build方式部署），最后请平台同事确认当前应用属于外网还是浙里办内网，如果要通过浙里办或支付宝扫码方式访问微应用需要切回内网。

2，回调地址和部署版本号问题。一般情况下每次部署需要手动把版本号改成一个最新的。如果已经接入了sso单点登录或其它有回调交互介入，则平台同事配置的回调地址版本号不会跟随最新版本号再自动更新，测试阶段,部署版本时，需要重复使用当前版本号，保持和回调地址的版本号一致。

3，回调地址参数获取问题。oss登录回调地址 xxxx.gov.cn/1.1.0/index.html?ticket=123456#/home 无法在/home路由通过$route直接获取到，可以使用window.location截取或者找平台同学@俞锦涛优化回调地址。

4，迁移到浙里办内网后axios请求改mgop请求，入参选项转换，封装支持promise回调。zlb/mgop.js

5，采集埋点 报错ZWJSBridge找不到 动态创建script引入js 联调阶段https改为http， 标签头信息声明<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> ，延迟初始化ZWJSBridge对象。


## `mgop.js`

``` js
import { mgop, setDefaultHeader } from '@aligov/jssdk-mgop'
import { Toast } from 'vant'

const params = {
  host: 'https://mapi.zjzwfw.gov.cn/',
  api: '',
  type: 'get',
  dataType: 'JSON',
  appKey: 'xxxxx+00000+xxxxx',
  data: {},
  header: {},
  timeout: 10000
}

export default function zlbRequest(config) {
  params.type = config.method
  params.data = { ...config.data, ...config.params }
  const opt = Object.assign(params, config)
  return new Promise((resolve, reject) => {
    mgop({
      ...opt,
      onSuccess: res => {
        // 设置默认头信息
        // setDefaultHeader({
        //   token: res.data.token
        // })

        resolve(res.data)
      },
      onFail: err => {
        Toast.fail(`[${err.data.response.status}]${err.data.response}`)
        reject(err.data)
      }
    })
  })
}

// 引用方式
// import mgopRequest from "@/utils/mgop"

// export function getTodoList(data) {
//   return mgopRequest({
//     api: 'mgop.watone.lawmzs.todoList',
//     url: '/mgr/Problem/todoList',
//     method: 'post',
//     params: data
//   })
// }
```