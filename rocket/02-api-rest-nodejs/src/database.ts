import { knex as setupKnex } from 'knex'

export const config = {
  client: 'sqlite',
  connection: {
    filename: '.temp/app.db',
  },
  useNullAsDefaut: true,
}

export const knex = setupKnex(config)
