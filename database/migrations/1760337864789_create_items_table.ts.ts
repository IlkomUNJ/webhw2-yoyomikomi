import { BaseSchema } from '@adonisjs/lucid/schema'


export default class extends BaseSchema {
  protected tableName = 'items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.integer('price').notNullable()
      table.boolean('available').defaultTo(true)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }


  async down() {
    this.schema.dropTable(this.tableName)
  }
}