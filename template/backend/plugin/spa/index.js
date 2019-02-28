
const devLogic = require('./dev-logic')
const prodLogic = require('./prod-logic')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    view(proto) {
      proto.spa = async(ctx, next) => {
        if (isDev) {
          devLogic(ctx, next)
        }
        else {
          prodLogic(ctx, next)
        }
      }
    }
}
