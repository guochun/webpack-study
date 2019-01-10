const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      {
        test: /css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertInto: '#app',
              transform: './css.transform.js'
            }
            //loader: 'style-loader/url'
            //loader: 'style-loader/useable'
          },
          {
             loader: 'css-loader'
            //loader: 'file-loader'
          },
        ]
      }
    ]
  }
}