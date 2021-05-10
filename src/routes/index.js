import FastifyPlugin from 'fastify-plugin'
import { verifyToken } from 'hooks/Prehandler'
import PostRoute from 'routes/PostRoute'
import UserRoute from 'routes/UserRoute'
import UploadRoute from 'routes/UploadRoute'
import PublicRoute from 'routes/PublicRoute'
import V2Routes from 'routes/v2'

async function allRoutes (fastify, opts) {
  fastify.register((instance, opts, next) => {
    instance.addHook('preHandler', async (req, res) => {
      await verifyToken(req, res)
    })

    instance.register(UserRoute)
    instance.register(PostRoute)
    instance.register(UploadRoute)
    instance.register(V2Routes, { prefix: '/v2' })

    next()
  })

  fastify.register(PublicRoute)
}

module.exports = FastifyPlugin(allRoutes)
