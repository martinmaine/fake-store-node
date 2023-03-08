const productsRouter= require ('./productos.routes')
function routerApi(app) {
  app.use ('/productos',productsRouter )
}

module.exports = routerApi
