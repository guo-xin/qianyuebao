# 好近商户版V2

> 商户版前端迭代版本,使用vue.js作为开发框架,同时配合es6+babel+webpack作为技术栈,esLint作代码检查工具.
> 内嵌 签约宝app html

### 构建说明

- development:

    - 说明:开发阶段
    - 执行命令:npm run-script dev

    > 热加载; ESlint语法检查; scss -> css -> postcss[px2rem, autoprefixer]; javascript es6 -> es5; 样式内联, 资源未压缩;


- production

    - 说明:生产环境构建
    - 执行命令:npm run-script build

    > scss -> css -> postcss[px2rem, autoprefixer]; javascript es6 -> es5; 图片<10000 -> base64; 资源压缩; URL加MD5

- testing

    - 说明:测试环境构建
    - 执行命令:npm run-script build_test

    > 同 production; API 地址请求为`测试环境`


- online

    - 说明:线上环境构建
    - 执行命令:npm run-script build_online

    > 同 production; 静态资源CDN


### 安装环境

``` bash
#### install dependencies
npm install

#### serve with hot reload at localhost:8080
npm run dev

#### build for production with minification
npm run build

#### run unit tests
npm run unit

#### run e2e tests
npm run e2e

#### run all tests
npm test
```


> 文档参见 [guide](http://vuejs-templates.github.io/webpack/) 及 [docs for vue-loader](http://vuejs.github.io/vue-loader).

*****

##### 注意事项 by fakership
* 此项目采用的MPA的方式进行开发
* 调试的时候建议采用线下扫一扫进行调试，但有时候一些页面需要一些参数，个人建议再加上xcode查看日志寻找，当然去看后端日志也可以
* 此项目前人实现的上拉加载有点问题，建议采用本人的`vue-infinite-scroll`进行改造
* jsbridge要采用bridge2，bridge1安卓端不兼容
