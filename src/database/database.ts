import { knex as setupKnex, Knex } from 'knex'

export const config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
} as Knex.Config

export const knex = setupKnex(config)
