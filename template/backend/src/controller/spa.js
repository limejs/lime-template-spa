module.exports = {
  async main(ctx, next) {
    console.log('yyyy')
    await this.view.spa(ctx, next)
  },
  async test(ctx, next) {
    ctx.body = 'test'
  }
}
