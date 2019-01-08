# 打包ts

## typescript-loader

1: 安装typescript-loader

npm install typescript ts-loader --save-dev(官方)
npm install typescript awesome-typescript-loader --save-dev

2 配置 tsconfig.json 和 webpack.config.js

### tsconfig

配置选项
  官网/docs/handbook/compiler-options.html

声明文件 
  当编写错误的时候 会有错误反馈。
  npm install @types/vue
  npm install @types/lodash

安装typings
npm install typings
typings install 生命文件

配置 tsconfig的typeRoots 属性。
···
 "typeRoots": [
      "./typings/modules"
  ]
···