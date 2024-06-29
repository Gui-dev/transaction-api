import cookie from '@fastify/cookie'
import Fastify from 'fastify'

import { transactionRoutes } from './routes/transactions'

export const app = Fastify()

app.register(cookie)
app.register(transactionRoutes)
