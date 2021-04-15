---
sidebarDepth: 2
---

# Utils

本篇文章将介绍一些实用类的小工具来帮助我们从繁琐的鼠标操作中脱离出来

## Spectatle

[Spectatle](https://www.spectacleapp.com/)一款可以让你更加轻松快速的控制窗口大小的软件。
快速实现窗口全屏/靠左/靠右/居中等展现形式, 建议快捷键设置如下。

- `cmd` + `alt` + `enter` 全屏
- `cmd` + `alt` + `<-` 靠左

![](https://gw.alicdn.com/tfs/TB1ESaBXG67gK0jSZFHXXa9jVXa-1224-1066.jpg)

## Dash

[Dash](https://kapeli.com/dash)是一个文档 API 文档浏览器，在单一窗口中可以浏览、搜索各 API 细节。使用效果如下图所示。

![](https://img.alicdn.com/tfs/TB1xPgeXNv1gK0jSZFFXXb0sXXa-1820-1206.png)

使用 VSCode 时可以在扩展中搜索 Dash，点击安装即可通过 `ctrl` + `h` 快捷键查找需要的 api 具体说明。

## Charles

[Charles](https://www.charlesproxy.com)是一个代理服务器，简单的说法为当访问网站时，会由 Charles 代为获取请求相关数据，这样就达到了截取网络请求以及分析请求结果的目的。Charles 是在日常工作中常用的功能包括: 代理移动端设备的请求，将远程文件代理到本地文件等。

### 代理移动端请求

代理移动端设备的请求指的是：将移动设备的请求代理到 PC 的 Charles 服务，以此来抓包移动端设备的请求详细信息以及使得移动端设备可以打开我们的本地服务器的资源

#### 开启设置

为了可以在 Charles 中截取网络请求数据，首先需要将 Charles 设置为系统代理，即让 Charles 成为获取请求数据的委托代理方，具体操作为：选择菜单栏中 `proxy` -> `Mac OS X Proxy` ，使 `Mac OS X Proxy` 前出现 `✔️` 。

在 charles 中选择菜单栏 `proxy` -> `proxy settings` , 在弹出的对话框中填写端口号（默认为 8888），勾选”enable transparent http proxying“。

![](https://img.alicdn.com/tfs/TB1.bFMaeH2gK0jSZFEXXcqMpXa-1172-1004.png)

#### 查看本机 IP

使用 `ifconfig` 查看本机在当前局域网中的 IP 地址

![](https://gw.alicdn.com/tfs/TB1490_ahD1gK0jSZFyXXciOVXa-1444-858.jpg)

`enx` 代表当前的第 x 块网卡，当前我们只有一块网卡，故 `192.168.199.161` 是我们当前的局域网 ip 地址

#### 移动端开启代理设置

确保手机和电脑连接同一个无线网络，并对无线网络进行代理设置

`WIFI` -> `HTTP代理` -> `手动` -> `填写IP以及端口号`

<img src="https://gw.alicdn.com/tfs/TB1rXl.aeP2gK0jSZFoXXauIVXa-750-1334.jpg"  style="height:556px; width:316px; ">

连接成功后 Charles 会弹窗提示，选择 `allow` 。至此该移动设备的请求都会被 Charles 所代理，我们可以在 PC 端的 Charles 中看到移动设备所有 `http` 请求的详细信息。

#### 抓包 https 请求

由于 https 协议的请求安全系数较高，在截取此类请求数据时，需要安装证书等操作，此处单独列出 https 协议请求的操作步骤。

1. 在 PC 上安装证书。在 charles 中选择菜单栏 `help` -> `SSL Proxying` -> `Install Charles Root Certificate` , 安装成功后，双击安装的证书进行信任处理。

![](https://img.alicdn.com/tfs/TB16ONTabj1gK0jSZFuXXcrHpXa-1478-930.png)

2. 在 Charles 选择菜单栏 `proxy` -> `SSL Proxying Settings` ，通过 `add` 添加需要抓包的域名，并选中 `enable SSL Proxying ` 。至此，在 PC 端中即可对 https 请求进行抓包处理。

![](https://gw.alicdn.com/tfs/TB1MrR.aeL2gK0jSZPhXXahvXXa-1482-1102.jpg)

3. 如果要截取移动端访问的 https 协议的数据，在完成上述步骤后，需要重复第一个步骤，并更改为选择菜单栏 `help` -> `SSL Proxying` -> `Install Charles Root Certificate on a Mobile Device or Remote Browser` 。移动端完成无线网络配置(移动端实机测试的第四步骤)后，访问[证书地址](http://charlesproxy.com/getssl)，即可完成移动端设备安装证书的操作。至此，移动端访问 https 请求，就可以在 charles 中实时显示相关抓包信息。

### 将远程文件代理到本地

当需要在线上环境测试展示效果，而本地程序代码不确保正确的情况下，可以将线上的文件访问地址重定向到本地的文件，从而使得线上环境真正使用的为本地需要测试的文件。

`Map Local` 是将指定的网络请求代理到本地文件，在 Charles 选择菜单栏 `Tools` -> `Map Local` ，填写需要重定向的源地址以及本地的目标文件。如果网络请求较为复杂，可在请求处右键选择 `Save Response` 保存请求返回的数据到本地。

#### Map From

源文件相关配置， `protocol` 选择 http 或者 https 协议， `HOST` 为远程服务域名， `PATH` 为请求的路径， `Query` 为请求查询字符串

#### Map To

为本地文件地址，可以为单文件或者文件夹的地址

注意：如果 Map From 以及 Map To 中的数据需要区分大小写，应勾取 Case-sensitive 选项。

![](https://gw.alicdn.com/tfs/TB1gC1XakL0gK0jSZFtXXXQCXXa-936-838.jpg)

通过以上设置，我们在访问 `http://baidu/com/test/a.js` 时，实际访问的是 `~/Desktop/a.js`

## 实用网站

- [can i use](https://caniuse.com/) 查看一些 API 的兼容性
- [中文版的 lighthouse](https://developers.google.com/speed/pagespeed/insights/) 测试网页性能
- [Autoprefixer](https://autoprefixer.github.io/) 为 css 加上浏览器前缀，配套 webpack 相关插件
- [在线可视化正则表达式测试网站](https://regexper.com)（需要科学上网）
- [在线 js 编辑器](https://jsfiddle.net/)（需要科学上网）
