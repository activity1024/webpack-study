const configFactory = require('../webpack.config');
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = merge(configFactory, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
  ],
})
