module.exports = (router) => {
  router.get('test', 'spa@test')
  router.get('*', 'spa@main')
}
