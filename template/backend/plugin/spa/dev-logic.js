
const webpackMiddleware = require("koa-webpack-dev-middleware");
const webpack = require('webpack')
const path = require('path')
const globalConfig = require('../../../config')
const webpackConfig = require((globalConfig.webpackConfigFile))

devMiddleware = webpackMiddleware(webpack(webpackConfig))

module.exports = (ctx, next) => {
  return devMiddleware(ctx, async function() {
      console.log('history模式')
      // history 模式
      const reqPath = ctx.url
      // find the file that the browser is looking for
      const reqPathArr = reqPath.split('/')
      const file = reqPathArr[reqPathArr.length - 1]
      if (['index.html'].indexOf(file) !== -1) {
        ctx.type = 'html'
        ctx.body = (devMiddleware.fileSystem.readFileSync(path.join(webpackConfig.output.path, file)))
      } else if (file.indexOf('.') === -1) {
        ctx.type = 'html'
        // if the url does not have an extension, assume they've navigated to something like /home and want index.html
        ctx.body = (devMiddleware.fileSystem.readFileSync(path.join(webpackConfig.output.path, 'index.html')))
      } else {
        await next()
      }
  })
}
