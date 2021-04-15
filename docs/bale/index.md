# 公司内网部署

## 前言

> 我们依靠`docker`内网部署,通过`jenkins`构建工作流

## 前端的 Vue 打包与部署

小贴士：<span style="color:red">前端打包统一采用相对路径,具体在文件`vue.config.js`进行如下配置:</span>

```js
module.exports = {
  // 打包为相对路径
  publicPath: "./",

  // 将构建好的文件输出到哪里
  outputDir: "dist",

  // 放置生成的静态资源(js、css、img、fonts)的目录。
  assetsDir: "static",

  // 指定生成的 index.html 的输出路径
  indexPath: "index.html",

  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,

  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [],

  // 生产环境关闭 source map
  productionSourceMap: false,
};
```

### 构建 vue 应用镜像

> nginx 是一个高性能的 HTTP 和反向代理服务器，此处我们选用 nginx 镜像作为基础来构建我们的 vue 应用镜像。

### 创建 nginx config 配置文件

![](https://files.catbox.moe/lya17n.png)

- 1.我们在根目录下创建`conf`文件夹
- 2.新建`default.conf`和`nginx.conf`

> `default.conf`文件:

::: tip 说明

```bash
location /api/ {
    		proxy_pass http://watone-gateway:3204/;
    	}
```

<span style="color:red">需要根据配置的后端地址改变而改变,访问不到的话会导致报错</span>

:::

```bash
server {
    listen       3000;
    server_name  localhost;
    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;
    #error_log  /var/log/nginx/host.error.log;
    location / {
        add_header X-Frame-Options SAMEORIGIN;
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
        add_header Access-Control-Allow-Credentials true;
        add_header Access-Control-Allow-Headers X-Requested-With;
         # disable cache html
        root   /usr/share/nginx/html;
        index  index.html index.htm index.shtml;
        try_files $uri $uri/ /index.html;

    }

    location /api/ {
    		proxy_pass http://watone-gateway:3204/;
    	}
    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

> `nginx.conf`文件:

```bash
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    use epoll;
    worker_connections  1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    #access_log  /var/log/nginx/access.log  main;

    sendfile       on;
    tcp_nopush     on;
    tcp_nodelay    on;
    client_header_timeout 15;
    client_body_timeout 15;
    send_timeout 15;
    keepalive_timeout  65;

    client_max_body_size 300m;

    gzip  on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    gzip_http_version 1.1;
    gzip_comp_level 6;
    gzip_types text/plain application/javascript application/x-javascript
text/javascript text/css application/xml;
    gzip_vary on;
    include /etc/nginx/conf.d/*.conf;
}
```

### 创建 Dockerfile 文件

> 在项目外层新建`dockerfile`文件:

```bash
# Citybrain nginx Dockerfile
# Version 1.0
# Base images 基础镜像
FROM nginx:1.16.0-alpine
#LABEL 维护者信息
LABEL caosx caosx@watone.com.cn
#COPY
COPY ./dist/ /usr/share/nginx/html/
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf
#RUN 赋予权限
RUN chown -R nginx. /usr/share/nginx
#EXPOSE 映射端口
EXPOSE 8000
#ENTRYPOINT 运行以下命令
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

### 检测 Docker 是否能够正常运行项目

- 在根目录新建`run.sh`文件:

```bash
#!/bin/bash
# 这里以watone-jw-h5项目为例
ENVIRONMENT='watone-jw-h5'

docker build . -t ${ENVIRONMENT}
docker run --rm -it  -p 9527:80/tcp ${ENVIRONMENT}:latest
```

- 运行脚本

```bash
sh run.sh
```

- 打开链接
  > [http://localhost:9527/#/](http://localhost:9527/#/)

<span style="color:green">能够顺利打开证明 Docker 能够正常运行项目</span>

### [重要]配置可执行的`yaml`文件

::: danger 重要
配置运行脚本,关系重大,务必检查仔细,包括端口,项目名称,避免冲突其他服务和端口
:::

> 以下均以`watone-jw-web`项目为例

- 在根目录新建`watone-jw-web-deployment.yaml`文件:

```bash
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: watone-jw-web
  namespace: lajw
  labels:
    web: watone-jw-web
spec:
  replicas: 3
  selector:
    matchLabels:
      web: watone-jw-web
  template:
    metadata:
      labels:
        web: watone-jw-web
    spec:
      nodeSelector:
        role2: worker
      imagePullSecrets:
        - name: image
      containers:
        - name: watone-jw-web
          image: reg.watone.local/lajw/watone-jw-web:latest
          imagePullPolicy: "Always"
          ports:
            - containerPort: 3000

---
apiVersion: v1
kind: Service
metadata:
  name: watone-jw-web
  namespace: lajw
  labels:
    web: watone-jw-web
spec:
  type: NodePort
  ports:
    - name: watone-jw-web
      port: 3000
      targetPort: 3000
      nodePort: 33000
  selector:
    web: watone-jw-web
```

::: tip 注意 ⚠️ 事项

<p style="color:red">1.需要改动文件名称加`XXX-deployment.yaml`</p>
<p style="color:red">2.以上`watone-jw-web`内容需要修改为自己项目名称`XXX`</p>
<p style="color:red">3.如果不需要太多部署备份服务`replicas: 3`可以改为`replicas: 1`</p>
<p style="color:red">4.`33000`端口是基础端口,看需要增加新的端口,➕1或➕2者往后加,后端服务一般在200之后,不太清楚的话,咨询其他人</p>
:::

### `jenkins`新的`Job`

- 新建`jenkinsfile`文件,把 URL 改为本项目 URL

```js
pipeline {
	agent any
  // agent {
  // 	docker {
  // 		image 'reg.watone.local/library/yarn:v1.22.4'
  // 		args '-v /usr/bin/docker:/usr/bin/docker -v /var/run/docker.sock:/var/run/docker.sock'
  // 	}
  // }

  stages {
    stage('Git Checkout'){
        steps {
            checkout([$class: 'GitSCM', branches: [[name: "$BRANCHES"]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'df5d99a0-9b4f-4ac1-aaaa-6e0865e0cd67', url: 'git@47.111.5.200:la-jw/watone-jw-web.git']]])
        }
    }

    stage('Yarn Build'){
        // agent { docker 'reg.watone.local/library/yarn:v1.22.4' }
        steps {
            sh '''
            yarn install
            yarn build
            '''
        }
    }

    stage('docker push') {
        steps {
          script {
            if(PROFILES == 'pre'){
              sh '''
              echo "构建并推送镜像到: ${REGISTRY} 仓库！！！"
              docker login -u ${ACCOUNT} -p ${PASSWD} ${REGISTRY}
              docker build -t ${REGISTRY}/${PROJECT_NAME}-pre/${IMAGE_NAME}:${VERSION} -f dockerfile .
              docker push ${REGISTRY}/${PROJECT_NAME}-pre/${IMAGE_NAME}:${VERSION}
              sleep 3
              docker rmi ${REGISTRY}/${PROJECT_NAME}-pre/${IMAGE_NAME}:${VERSION}
              '''
            }
            if(PROFILES == 'prod'){
              sh '''
              echo "构建并推送镜像到: ${REGISTRY} 仓库！！！"
              docker login -u ${ACCOUNT} -p ${PASSWD} ${REGISTRY}
              docker build -t ${REGISTRY}/${PROJECT_NAME}/${IMAGE_NAME}:${VERSION} -f dockerfile .
              docker push ${REGISTRY}/${PROJECT_NAME}/${IMAGE_NAME}:${VERSION}
              sleep 3
              docker rmi ${REGISTRY}/${PROJECT_NAME}/${IMAGE_NAME}:${VERSION}
              '''
            }
           }
        }
    }

    stage('Deploy to k8s') {
        steps {
            script {
                if ( PROFILES == 'prod' ) {
                    echo '接下来进行生产项目的发布...'
                    sh '''
                    sed -i "/image/{s/latest/${VERSION}/}"  ${DEPLOYMENT}
                    sshpass scp ${DEPLOYMENT} root@172.18.39.191:/root/caosx/yml
                    sshpass ssh root@172.18.39.191 "kubectl apply -f /root/caosx/yml/${DEPLOYMENT}"
                    '''
                    // kubernetesDeploy configs: 'watone-jw-web-deployment.yaml', kubeConfig: [path: ''], kubeconfigId: '3ab9d4b4-ffb9-44af-ab49-c17b64161198', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
                }

                // if ( PROFILES == 'test' ) {
                //     echo '接下来进行测试项目的发布...'
                //     sh '''
                //     sed -i "/image/{s/latest/${VERSION}/}"  deploy.yaml
                //     '''
                //     kubernetesDeploy configs: 'deploy.yaml', kubeConfig: [path: ''], kubeconfigId: '3ab9d4b4-ffb9-44af-ab49-c17b64161198', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
                // }

                // if ( PROFILES == 'pre' ) {
                //     echo '接下来进行预发项目的发布...'
                //     sh '''
                //     sed -i "/image/{s/latest/${VERSION}/}"  deploy.yaml
                //     '''
                //     kubernetesDeploy configs: 'deploy.yaml', kubeConfig: [path: ''], kubeconfigId: '3ab9d4b4-ffb9-44af-ab49-c17b64161198', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
                // }
                if ( PROFILES == 'pre' ) {
                   echo '接下来进行预发项目的发布...'
                   sh '''
                   sed -i "/image/{s/latest/${VERSION}/}"  ${DEPLOYMENT}
                   sed -i "/image/{s/${PROJECT_NAME}/${PROJECT_NAME}-pre/}"  ${DEPLOYMENT}
                   sed -i "/profiles/{s/profiles/${PROFILES}/}"  ${DEPLOYMENT}
                   sshpass scp ${DEPLOYMENT} root@172.18.19.216:/root/caosx/yml
                   sshpass ssh root@172.18.19.216 "kubectl apply -f /root/caosx/yml/${DEPLOYMENT}"
                   '''
              //     kubernetesDeploy configs: 'deploy.yaml', kubeConfig: [path: ''], kubeconfigId: '3ab9d4b4-ffb9-44af-ab49-c17b64161198', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
               }
            }
        }
    }

    stage ('Post-Build') {
        steps {
            script {
                currentBuild.description = "${VERSION}"
            }
        }
    }
  }
}

```

![](https://files.catbox.moe/tyvrs3.png)

> 命名一般采用:测试化境-项目名称+test,正式环境-项目名称

- 复制一个`job`从`watone-jw-web`,指定一个分支

![](https://files.catbox.moe/rxb4z4.png)

- 点击保存,大功告成
