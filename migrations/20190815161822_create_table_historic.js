
exports.up = function(knex) {
    return knex.schema.createTable('historic', table => {
        table.increments('id').primary()
        table.integer('owner').notNull()
        table.string('moto').notNull()
        table.string('service').notNull()
        table.date('date')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('historic')
};
