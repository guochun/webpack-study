# 处理css

## style-loader
在html页面生成style标签

style-loader/url
生成一个css文件 并且以link标签的形式引入

style-loader/useable
可以设定那些样式可用那些样式不可用

### options
insertAt (插入位置)

insertInto (插入到dom)

singleton(是否只使用一个style标签)

transform(转化 浏览器环境 插到页面前)

## css-loader

options 
  alias(解析的别名)
  importLoader(@import)
  Minimize(是否压缩)
  modules(启用css-modules)

  css模块化

:local 给定本地样式
:global 给定全局样式
compose 继承样式
compose ... from path 从一个文件引入一段样式
