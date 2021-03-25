const configFactory = require('../webpack.config');
const {merge} = require('webpack-merge');


module.exports = merge(configFactory, {
  mode: "development",
  // devtool: "inline-cheap-source-map",
  devtool:'source-map'
})
