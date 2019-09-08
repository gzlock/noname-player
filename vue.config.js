const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true, // console
              drop_debugger: false,
              pure_funcs: ['console.log']// 移除console
            }
          }
        })
      ]
    }
  },
  devServer: {
    disableHostCheck: true
  }
}
