import Fastify from 'fastify'
import { knex } from './database/database'

const PORT = 3333 || process.env.PORT
const app = Fastify()

app.get('/', async () => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

app
  .listen({
    port: PORT,
  })
  .then(() => console.log(`HTTP Server running http://localhost:${PORT}`))
