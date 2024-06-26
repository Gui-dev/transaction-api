import Fastify from 'fastify'
import { env } from './validations/env'

const app = Fastify()

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log(`HTTP Server running http://localhost:${env.PORT}`))
