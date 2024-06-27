import Fastify from 'fastify'

import { transactionRoutes } from './routes/transactions'
import { env } from './validations/env'

const app = Fastify()

app.get('/', () => {
  return 'Hello World'
})

app.register(transactionRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log(`HTTP Server running http://localhost:${env.PORT}`))
