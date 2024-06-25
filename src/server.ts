import Fastify from 'fastify'

const PORT = 3333 || process.env.PORT
const app = Fastify()

app
  .listen({
    port: PORT,
  })
  .then(() => console.log(`HTTP Server running http://localhost:${PORT}`))
