
exports.up = function(knex) {
    return knex.schema.createTable('budget', table => {
      table.increments('id').primary()
      table.integer('client').notNull()
      table.string('item').notNull()
      table.decimal('price').notNull()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('budget')
  };
