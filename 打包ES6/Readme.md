# 编译ES6/7
Babel 
Babel-presets
Babel-plugin

安装 babel-loader @babel/core 

## Babel-presets

- es2015
- es2016
- es2017
- babel-preset-react
- babel-preset-stage 0 - 3

安装 @babel/preset-env 

presets的target参数指定那些需要编译那些不编译

target.browsers
- last 2 versions 
- > 1%

## babel plugin

### babel ployfill: 全局垫片 为应用准备。
- npm install babel-polyfill --save  
- import 'babel-ployfill'
### babel Runtime Transform: 局部垫片 为框架准备 
- npm install babel-plugin-transform-runtime --save-dev
- npm install babel-runtime --save
- 配置 .babelrc