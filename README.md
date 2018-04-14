# 治娱直播 前端

## 开发环境

* node >= 6.11.3
* npm  >= 5.0.0

## 本地开发

```
$ yarn / npm install
$ yarn start / npm start
```
## 服务端部署方法
>配置文件参考：`nginx/nginx.conf`

1.安装`Nginx` 
步骤参考：https://www.jianshu.com/p/1a92ad1586ef
2.打包项目,打包后会在根目录生成`dist`文件夹
```
$ npm build
```

3.将`build`文件夹放入`/usr/local/nginx/html`中 

4.配置`nginx.conf`文件 进入`/usr/local/nginx/conf`下
```
$ vim nginx.conf
```
5.运行nginx
```
$ /usr/local/sbin/nginx 
```
&6.重启nginx
```
$ /usr/local/sbin/nginx -s restart
```

## 技术栈

* 使用 create-react-app 
* 使用 Ant.design 
* 使用 Less css（Ant.design 使用 Less）
* 不使用 Redux, Flux
* 不使用 dva


## 目录说明
```
.
├── README.md         
├── config-overrides.js // 配置文件，比如 webpack
├── package.json        // npm 配置
├── public              // 静态文件目录
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src                 // 源码
    ├── images          // 图片资源文件夹
    ├── index.js        // 项目入口
    ├── components      // 通用组件文件夹     
    ├── pages           // 页面目录，每个页面对应一个文件夹
    │   └──  Container  // 侧边菜单页面          
    ├── router.js       // 路由
    └── theme.js        // 主题，用来定制 Ant.design

```

