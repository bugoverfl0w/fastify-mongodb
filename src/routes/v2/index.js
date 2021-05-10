import UserRoute from 'routes/v2/UserRoute'
import PostRoute from 'routes/v2/PostRoute'

module.exports = function (fastify, opts, next) {
  UserRoute(fastify, opts, next)
  PostRoute(fastify, opts, next)
  next()
}
