
exports.up = function(knex) {
    return knex.schema.createTable('historic', table => {
        table.increments('id').primary()
        table.integer('owner').notNull()
        table.integer('moto').notNull()
        table.string('service').notNull()
        table.dateTime('madeIn')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('historic')
};
