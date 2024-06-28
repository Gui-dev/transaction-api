import { randomUUID } from 'node:crypto'

import { FastifyInstance } from 'fastify'

import { knex } from '../database/database'
import { createTransactionBodySchema } from '../validations/create-transaction-validation'
import { getTransactionParamsSchema } from '../validations/get-transaction-validation'

export const transactionRoutes = async (app: FastifyInstance) => {
  app.get('/transactions', async (request, reply) => {
    const transactions = await knex('transactions').select()

    return reply.status(200).send({ transactions })
  })

  app.get('/transactions/:id', async (request, reply) => {
    const { id } = getTransactionParamsSchema.parse(request.params)
    const transaction = await knex('transactions').where('id', id).first()

    return reply.status(200).send({ transaction })
  })

  app.get('/transactions/summary', async (request, reply) => {
    const summary = await knex('transactions')
      .sum('amount', { as: 'amount' })
      .first()

    return reply.status(200).send({ summary })
  })

  app.post('/transactions', async (request, reply) => {
    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    let session_id = request.cookies.session_id

    if (!session_id) {
      session_id = randomUUID()
      reply.cookie('session_id', session_id, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id,
    })

    return reply.status(201).send()
  })
}
