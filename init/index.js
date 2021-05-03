import FastifyPlugin from 'fastify-plugin'
import FastifyExpress from 'fastify-express'
import Cors from 'cors'
import Middlewares from 'init/Middlewares'
import QueueWorkers from 'queues/workers'
import Database from 'helpers/Database'

async function init (fastify, opts) {
  await fastify.register(FastifyExpress)
  fastify.use(Cors())

  fastify.register(Database)
  fastify.register(Middlewares)
  fastify.register(QueueWorkers)
}

module.exports = FastifyPlugin(init)
