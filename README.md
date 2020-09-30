# my-banner

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### addBy dxwu 2020-09-30
# 搭建起步
参考流程 https://www.jianshu.com/p/b4568343cc7f
package中编写打包命令"pkg": "vue-cli-service build --target lib --name my-banner ./src/components/index.js"

npm run pkg

npm publish


# 使用说明
一、项目中安装
npm i @dxwu/my-banner

二、main.js中引入
// 引入自定义组件
import Banner from "@dxwu/my-banner"
import '@dxwu/my-banner/dist/my-banner.css'
Vue.use(Banner);

新增vue.config.js 增加css.extract false 强制样式内联 就可以不用导入样式了
import Banner from "@dxwu/my-banner"
Vue.use(Banner);


