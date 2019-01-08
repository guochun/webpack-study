# 提取公共代码

CommonsChunkPlugin

webpack.optimize.CommonsChunkPlugin

···
plugins: [
  new webpack.optimize.CommonschunkPlugin(options)
]
···

# options

name & names
filename
minChunks
chunks
children
deepChildren
async

## 场景
单页应用
单页应用 + 第三方依赖
多页应用 + 第三方依赖 + webpack生成代码