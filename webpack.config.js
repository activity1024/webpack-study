const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry:{
    home: './src/pages/home/index.js',
    article: './src/pages/article/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "static/js/[name].[hash].chunk.js",
    publicPath:"/"
  },
  target: ['web','es5'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://activity-server.rico.org.cn',
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    },
    host: "0.0.0.0",//允许ip访问
    inline: true, //实时刷新
    hot: true, // 模块热替换机制
    port: 9050,
    compress: true,
    open: false, // 打开浏览器，默认false
    // https:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/home.html',
      filename: 'home.html',
      // inject: true,
      chunks:['home']
    }),
    new HtmlWebpackPlugin({
      template: 'public/article.html',
      filename: 'article.html',
      // inject: true,
      chunks:['article']
    }),
  ]
}
