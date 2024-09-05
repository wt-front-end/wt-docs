# 国内常用 docker


## nginx 国内镜像

``` bash
# 从Registry中拉取镜像
docker pull registry.cn-hangzhou.aliyuncs.com/watone_docker/nginx:stable-alpine
docker pull registry.cn-hangzhou.aliyuncs.com/watone_docker/nginx:latest
```

## node 国内镜像

``` bash
# 从Registry中拉取镜像
docker pull registry.cn-hangzhou.aliyuncs.com/watone_docker/xk-node:16
docker pull registry.cn-hangzhou.aliyuncs.com/watone_docker/xk-node:18
docker pull registry.cn-hangzhou.aliyuncs.com/watone_docker/xk-node:20
```

## 使用私有docker

> 添加私有镜像源

``` bash
  "insecure-registries" : [
    "docker.jixiaokang.com",
    "docker.frp.jixiaokang.com"
  ]
```
> 拉取公司内网镜像
``` bash
docker pull docker.jixiaokang.com/nginx:latest
```
> 拉取互联网镜像
``` bash
docker pull docker.frp.jixiaokang.com/nginx:latest
```
> 配置简易的 `docker-compose.yml` 示例

``` yml
version: "3.8"
networks:
  docker_net:
    external: true
services:
  service_web:
    image: docker.frp.jixiaokang.com/nginx:latest
    container_name: nginx-web
    restart: always
    # 构建配置(可选)
    build:
      context: .  # 构建上下文
      dockerfile: dockerfile  # 指定 Dockerfile 文件
    volumes:
            - /data/nginx:/etc/nginx
    networks:
      - docker_net
    ports:
      - 63333:3000
```

## 运行容器
```bash
docker-compose up -d
# or 强制运行指定文件的 yml
docker-compose -f docker-compose.yml up -d
```

## 前端 docker 配置 `dockerfile`

> `nginx:stable-alpine` 镜像可替换为 `registry.cn-hangzhou.aliyuncs.com/watone_docker/nginx:stable-alpine`

``` dockerfile
# Version 1.0
FROM nginx:stable-alpine
#LABEL 维护者信息
LABEL xkloveme xkloveme@gmail.com
#COPY
COPY ./dist/ /usr/share/nginx/html/
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf
#RUN 赋予权限
RUN chown -R nginx. /usr/share/nginx
#EXPOSE 映射端口
EXPOSE 3000
#ENTRYPOINT 运行以下命令
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

## `.dockerignore`

``` bash
/node_modules
```

## `nginx.conf`

``` bash
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
    server_tokens off;
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
    gzip_static on; # 开启 gzip 压缩
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    gzip_http_version 1.0;
    gzip_comp_level 6;
    gzip_types text/plain application/javascript application/x-javascript
text/javascript text/css application/xml;
    gzip_vary on;
    include /etc/nginx/conf.d/*.conf;
}
```

## `default.conf`

``` bash
server {
    listen       3000;
    server_name  localhost;
    add_header X-Frame-Options ALLOWALL; #允许所有域名iframe
    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;
    #error_log  /var/log/nginx/host.error.log;
    location / {
        add_header X-Frame-Options ALLOWALL; #允许所有域名iframe
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
        add_header Access-Control-Allow-Credentials true;
        add_header Access-Control-Allow-Headers X-Requested-With;
         # disable cache html
        root   /usr/share/nginx/html;
        index  index.html index.htm index.shtml;
        try_files $uri $uri/ /index.html;

    }

    location /gov-v2-api/ {
        proxy_pass http://nurture-gm-service:9000/;
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