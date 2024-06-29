import './../src/validations/env'

import request from 'supertest'
import { afterAll, beforeAll, describe, it } from 'vitest'

import { app } from './../src/app'

describe('Transaction routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.ready()
  })
  it('should be able to user create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'Fake transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })
})
