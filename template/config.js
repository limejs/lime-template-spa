const path = require('path')

module.exports = {
  webpackConfigFile: resolve('./frontend/webpack.config.js'), // webpack编译配置
  feDist: resolve('./backend/fe-dist')
}

function resolve(relativePath) {
  return path.resolve(__dirname, relativePath)
}
