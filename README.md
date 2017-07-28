## mkdir webpack-test
## cd webpack-test
## npm init -y
## ls(package.json)
## npm install webpack -g
## npm install webpack --save-dev
## ls(node_modules)
## webpack hello.js hello.boundle.js
```
Hash: 74b89f9961230b42e83d  哈希值
Version: webpack 3.4.1  webpack版本
Time: 103ms   打包花费的事件
Asset（打包生成的文件）  Size（生成文件大小）  Chunks（打包分块）   Chunk Names（块名称）
hellow.boundle.js         2.52 kB          0  [emitted]            main

   [0] ./hello.js 43 bytes {0} [built]（打包结果）

```

## webpack天生不支持.css类型,直接webpack hello.js hello.boundle.js编译报错
```
ERROR in ./style.css
Module parse failed: E:\webpack-test\style.css Unexpected token (1:9)
You may need an appropriate loader to handle this file type.
| html,body{
|    margin: 0;
|    padding: 0;
 @ ./hello.js 2:0-22
```
## 为解决以上的错误，需要安装loader
```
npm install css-loader style-loader --save-dev
```

## 安装完后还是报这样的错误，其实是因为只是引用了style.css,并没有给指定相应的loader
```
require('./style.css')==>require('css.loader!./style.css')
这种语法相当于引用./style.css文件之前，必须是先经过css-loader的处理
```

## 接下来运行，发现已经不报错了webpack hello.js hello.boundle.js,而且hellow.boundle.js多了一些代码,说明css文件已经打包进来了
```
exports.push([module.i, "html,body{\r\n   margin: 0;\r\n   padding: 0;\r\n}", ""]);
```

## 新建一个html文件，引入hellow.bundle.js文件，在浏览器中打开，发现js文件可以弹出222

## 为了更方便的看效果，我们在css文件中添加一下代码
```
body{
   background-color: red;
}
```

## 重新执行webpack hello.js hellow.bundle.js,发现css效果并没有生效

## 这是为什么呢？其实我们要是想让css生效还要借助一个loader
```
require('style-loader!css-loader!./style.css')
```
## 重新执行webpack hello.js hellow.bundle.js,发现css效果生效了
```
可以发现页面head标签中多了styel标签
<style type="text/css">html,body{
   margin: 0;
   padding: 0;
}
body{
   background-color: red;
}</style>
如果不加style-loader,head标签中是不增加style样式的
```

## css-loader是使得webpack可以处理.css文件，style-loader是通过css-loader处理完的文件，把处理完的文件新建一个style标签插入到html文件里面，当html文件引入了打包后的文件后，页面就可以执行了，css也就直接插入到head标签了

# 注意：这种简化写法总是报错，还为找到解决办法，不知道新版本是否支持
## 简化代码
```
require('style-loader!css-loader!./style.css');
每次引入css文件都这样写的话比较麻烦，把webpack hello.js hellow.boundle.js替换为 webpack hello.js hellow.boundle.js --moudle-bind 'css=style-loader!css-loader'
```

## 整合代码
```
webpack hello.js hellow.boundle.js --module-bind 'css=style-loader!css-loader' --progress --display-modules --display-reasons --watch
```





# 总结

## webpack

### 1.打包工具
- 可以把很多模块打包成很小的静态文件

### 2.代码分割
- 使得项目中加载时只加载项目需要的文件

### 3.loader
- 处理各种各样的文件，如果是js,无论是commonJS（require）、AMD、es6模块化写的,都可以通过loader处理，还可以处理css、image、json、coffeeScript、less以及自定义的（如：vue写的.vue结尾的文件，react写的.jsx结尾的文件）

## webpack诞生
### 1.在处理大型项目时没有找到一种合理的解决方式
### 2.他想要的需求在现有的打包工具中达不到（比如：代码分割）

## webpack目标
### 1.切分他的依赖树（把他的依赖树切分到不同代码块里，还需加载这些依赖）和懒加载类似
### 2.初始化的加载时间更少
### 3.任何静态资源都可以视为模块在项目中被引用，开发过程中起到便利作用
### 4.整合第三方类库，并把第三方类库作为模块在项目中引用
### 5.在整个打包过程中自定义（几乎是每一个部分都可以自定义去做一些自己想做的事情）
### 6.适合大型项目

## 为什么webpack和其他的打包工具不一样
### 1.代码分割  2.loaders  3.插件系统

## webpack官网
```
webpack.github.io
```
