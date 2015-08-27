var webpack = require('webpack')

module.exports = {
  entry: {
    bundle: './index.js'
  }
  , output: {
    path: './dist'
    , filename: '[name].js'
  }
  , plugins: [
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: '"production"' }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false
  })
  ]
}