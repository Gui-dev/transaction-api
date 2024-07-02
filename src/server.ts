import 'dotenv/config'

import { app } from './app'
import { env } from './validations/env'

console.log(env)

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log(`HTTP Server running http://localhost:${env.PORT}`))
