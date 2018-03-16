# React-koa-ssr
> 本脚手架适合已有的react单页面项目迁移到服务端渲染，又不想改动较大，不适合用NEXT框架重新写的项目.

webpack+router4+按需加载+webpack-dev-server 实现react服务端渲染(koa)


## 目录介绍

```
├── assets
│   └── index.css //放置一些全局的资源文件 可以是js 图片等
├── config
│   ├── webpack.config.dev.js  开发环境webpack打包设置
│   └── webpack.config.prod.js 生产环境webpack打包设置
├── package.json
├── README.md
├── server  server端渲染文件，如果对不是很了解，建议参考[koa教程](http://wlxadyl.cn/2018/02/11/koa-learn/)
│   ├── app.js
│   ├── clientRouter.js  // 在此文件中包含了把服务端路由匹配到react路由的逻辑
│   ├── ignore.js
│   └── index.js
└── src
    ├── app  此文件夹下主要用于放置浏览器和服务端通用逻辑
    │   ├── configureStore.js  //redux-thunk设置
    │   ├── createApp.js       //根据渲染环境不同来设置不同的router模式
    │   ├── index.js
    │   └── router
    │       ├── index.js
    │       └── routes.js      //路由配置文件！ 重要
    ├── assets
    │   ├── css                放置一些公共的样式文件
    │   │   ├── _base.scss     //很多项目都会用到的初始化css
    │   │   ├── index.scss
    │   │   └── my.scss
    │   └── img
    ├── components             放置一些公共的组件
    │   ├── FloatDownloadBtn   公共组件样例写法
    │   │   ├── FloatDownloadBtn.js
    │   │   ├── FloatDownloadBtn.scss
    │   │   └── index.js
    │   ├── Loading.js
    │   └── Model.js           函数式组件的写法
    │
    ├── favicon.ico
    ├── index.ejs              //渲染的模板 如果项目需要，可以放一些公共文件进去
    ├── index.js               //包括热更新的逻辑
    ├── pages                  页面组件文件夹
    │   ├── home
    │   │   ├── components     // 用于放置页面组件，主要逻辑
    │   │   │   └── homePage.js
    │   │   ├── containers     // 使用connect来封装出高阶组件 注入全局state数据
    │   │   │   └── homeContainer.js
    │   │   ├── index.js       // 页面路由配置文件 注意thunk属性
    │   │   └── reducer
    │   │       └── index.js   // 页面的reducer 这里暴露出来给store统一处理 注意写法
    │   └── user
    │       ├── components
    │       │   └── userPage.js
    │       ├── containers
    │       │   └── userContainer.js
    │       └── index.js
    └── store
        ├── actions            // 各action存放地
        │   ├── home.js
        │   └── thunk.js
        ├── constants.js       // 各action名称汇集处 防止重名
        └── reducers
            └── index.js       // 引用各页面的所有reducer 在此处统一combine处理
```

项目实践中发现，页面的reducer跟页面的数据需求和数据结构强相关，获取到新数据后的处理应由页面本身处理。
action是请求数据的触发器，通过与具体页面解耦，从而使逻辑更清晰。
还有一点就是这些action可能正是服务端渲染需要的数据，从而让服务端渲染调用数据获取函数更方便。

开发环境使用webpack-dev-server做服务端，实现热加载，生产环境使用koa做后端，实现按需加载，页面渲染前加载数据。

1. npm install
2. npm start 运行开发版环境


-------------------------------------------------

1. npm install
2. npm run build 生产环境编译 dist/client+dist/server
3. npm run server 运行koa
4. npm run dev:server 本地运行koa检查服务端渲染



-------------------------------------------------
新增特性
1. 通过config中webpack配置的全局options来动态改写网页标题和公共路径（HtmlWebpackPlugin）
2. v4的react路由，但仍可以通过路由数组进行配置
3. 对页面组件进行分层，将reducer与页面结合，action与页面解耦
4. 服务端渲染时向页面注入全局变量保存获取的数据，从而react初始化时可以获取到渲染数据
5. 打包时的js压缩插件更新到最新，可以支持ES6语法，启用平行压缩