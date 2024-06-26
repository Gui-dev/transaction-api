import { knex as setupKnex, Knex } from 'knex'

export const config = {
  client: 'sqlite',
  connection: {
    filename: './app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './migrations',
  },
} as Knex.Config

export const knex = setupKnex(config)
