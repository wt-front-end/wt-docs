---
title: WATONE 命令行
---
# WATONE 命令行工具

## 前言
![](https://www.helloimg.com/images/2023/01/12/oGW7sm.png)

> 为了快速帮助开发命令行工具，本文的教程将用于学习各种命令行工具的使用。
> 请按照本教程使用，会极大提升工作效率。
> 该工具是集成了各种好用的小工具

## 安装并使用
```bash
npm install @watone/wt-cli --global
# OR
yarn install @watone/wt-cli --global
# OR
pnpm install @watone/wt-cli --global
```
## 命令预览
```bash
watone -h
```
![](https://www.helloimg.com/images/2023/01/12/oGWkF1.png)

## 命令说明

- 当你安装`watone`之后，你可以在命令行环境中输入`watone help`来查看你所使用的命令的相关说明。

- 注意`watone`是一个顶级命令,同时创建的顶级命令还有`i`,`http`,`b`,`v`,当你直接使用顶级命令时,可以不用包含`watone`前缀,值得说明的是`i`,`http`,`b`,`v`都可以在`watone`下使用,等同与`watone i`,`watone http`,`watone b`,`watone v`

``` bash
i => watone i
http => watone http
b => watone b
v => watone v
```
## watone 命令

### watone -v 获取版本号

``` bash
# 版本号
watone -v
# OR
watone --version
```

### watone -h 查看帮助

``` bash
# 查看帮助
watone -h
# OR
watone --help
```

### watone s 关键字搜索

``` bash
# 搜索问题,并在浏览器打开
watone s
# OR
watone serach
使用方法：
      watone s [搜索的关键字]

可选参数
     -b, --baidu   使用百度搜索
     -g, --google  使用谷歌搜索
     -s, --sougou  使用搜狗搜索
     -t, --github  使用github搜索
```

### watone ip 获取本机ip

``` bash
watone i
# OR
watone ip
使用方法：
      watone ip
```

### watone o 打开url
``` bash
# 会使用默认浏览器打开url
watone o
# OR
watone open
使用方法：
      watone o [url链接]
```
### watone t 翻译服务
> 此命令需要连接到互联网
``` bash
# 会在当前目录启动一个watonetp服务,并在浏览器打开
watone t
# OR
watone translation
使用方法：
      watone t [需要翻译的单词或关键词]
例如：(翻译你好)
      watone t 你好
```

### watone w 天气服务
> 此命令需要连接到互联网
``` bash
# 会查询当前地区天气服务
watone a
# OR
watone warther
使用方法：
      watone a [地区]
例如：(查询郑州的天气)
      watone a zhengzhou
```

## http 命令说明

![](https://www.helloimg.com/images/2023/01/12/oGWVzb.png)
``` bash
# 会在当前目录启动一个http服务,并在浏览器打开
http
# OR
watone h
# OR
watone http
使用方法：
      watone h
可选参数
     -p, --port   指定端口,默认5282
     -o, --open   是否打开浏览器,默认打开
     -u, --url    启动目录,默认当前目录
```

## v 命令说明

> 当在所在项目时,v命令会去寻找dev命令执行
 启动项目
``` bash
v
# OR
watone v
# OR
watone dev
使用方法：
      watone v [npm的启动命令]
```

## v 命令说明

> 当在所在项目时,v命令会去寻找dev命令执行
> 当后面跟参数时 `b`、 `i`、 `v` 命令并没有本质区别
> 和`pnpm`、`yarn`、`npm`一样,当没有安装`pnpm`时,启动顺序为`pnpm`>`yarn`>`npm`
``` bash
v
# OR
watone v
# OR
watone dev
使用方法：
      watone v [npm的启动命令]
```

## b 命令说明

> 当在所在项目时,b命令会去寻找build命令执行
> 当后面跟参数时 `b`、 `i`、 `v` 命令并没有本质区别
> 和`pnpm`、`yarn`、`npm`一样,当没有安装`pnpm`时,启动顺序为`pnpm`>`yarn`>`npm`
``` bash
b
# OR
watone b
# OR
watone build
使用方法：
      watone b [npm的启动命令]
```

## i 命令说明

> 当在所在项目时,i命令会去安装依赖同`pnpm i`
> 当后面跟参数时 `b`、 `i`、 `v` 命令并没有本质区别
> 和`pnpm`、`yarn`、`npm`一样,当没有安装`pnpm`时,启动顺序为`pnpm`>`yarn`>`npm`
``` bash
i
# OR
watone i
# OR
watone install
使用方法：
      watone i [npm的启动命令]
```