
exports.up = function(knex) {
    return knex.schema.createTable('maintenance', table => {
        table.increments('id').primary()
        table.integer('id_moto').notNull()
        table.foreign('id_moto').references('motorcycle.id')
        table.string('service').notNull()
        table.date('date').default(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('maintenance')
};
