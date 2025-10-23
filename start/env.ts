/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also casts values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.string(),

  /*
  |--------------------------------------------------------------------------
  | SQLite configuration
  |--------------------------------------------------------------------------
  |
  | For SQLite, we only need the database file name, not host or user info.
  |
  */
  DB_CONNECTION: Env.schema.string(),
  SQLITE_DB_NAME: Env.schema.string(),
})
