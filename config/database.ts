import Application from '@adonisjs/core/services/app'

const databaseConfig = {
  connection: process.env.DB_CONNECTION || 'sqlite',
  connections: {
    sqlite: {
      client: 'sqlite3',
      connection: {
        filename: Application.tmpPath('database.sqlite'),
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
}

export default databaseConfig
