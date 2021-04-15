# Git 提交规范

## 提交代码

1. clone 代码
``` bash
git clone git@47.111.5.200:jixk/wt-web-template.git
// 只克隆最新的一份提交
git clone git@47.111.5.200:jixk/wt-web-template.git --depth 1
```
> 切换分支
``` bash
git checkout jxk
```
2. 拉取代码
``` bash
// 拉取master分支代码
git pull origin master
```
> 如果本地代码有改动,拉取不下来

``` bash
// 可以贮藏
git stash
// 取消贮藏
git stash pop
```

## 推送代码


``` bash
// 提交commit
git commit -m '提交最新的内容'
git push origin jxk
```
### 修改类型
> 每个类型值都表示了不同的含义，类型值必须是以下的其中一个：

- feat：提交新功能
- fix：修复了bug
- docs：只修改了文档
- style：调整代码格式，未修改代码逻辑（比如修改空格、格式化、缺少分号等）
- refactor：代码重构，既没修复bug也没有添加新功能
- perf：性能优化，提高性能的代码更改
- test：添加或修改代码测试
- chore：对构建流程或辅助工具和依赖库（如文档生成等）的更改

## 从自己分支合并到`pre`
> 需要在gitlab上手动提交

![](https://files.catbox.moe/wkua1s.png)
## Git 全局设置

```bash
git config --global user.name "冀小康"
git config --global user.email "jixk@watone.com.cn"
```

### 创建一个新仓库

```bsah
git clone git@47.111.5.200:jixk/wt-web-template.git
cd wt-web-template
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

### 推送现有文件夹

```bsah
cd existing_folder
git init
git remote add origin git@47.111.5.200:jixk/wt-web-template.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

### 推送现有的 Git 仓库

```bash
cd existing_repo
git remote rename origin old-origin
git remote add origin git@47.111.5.200:jixk/wt-web-template.git
git push -u origin --all
git push -u origin --tags
```

## 分支命名规范

> 修复`bug`需要在`pre`新建分支`fixed-名字缩写-月份-日期`

> 开发新功能需要在自己分支上操作一般为自己名称缩写

> 提交代码规范,任何人不允许提交到`master`分支

> 需要提交到`pre`然后合并到`master`分支

> `pre`环境发布不做限制,`master`发布须在`pre`验证通过才能发布

## 常用命令

```bash
$ git reset --hard ^HEAD # 版本回退
$ git checkout -- [file] # 撤销修改
$ git stash # 暂存修改
$ git stash apply # 恢复修改
```


```bash
$ git push origin dev -f # 使用--force来强制push，但你要清楚这可能会导致你的一些commit记录的丢失，所以请仅在个人分支进行该操作
```