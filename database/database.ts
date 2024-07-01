import 'dotenv/config'

import { Knex, knex as setupKnex } from 'knex'

import { env } from '../src/validations/env'

export const config = {
  client: 'sqlite',
  connection: {
    filename: env?.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
} as Knex.Config

export const knex = setupKnex(config)
