import { app } from './app'
import { env } from './validations/env'

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log(`HTTP Server running http://localhost:${env.PORT}`))
