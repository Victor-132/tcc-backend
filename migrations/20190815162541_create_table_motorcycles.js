
exports.up = function(knex) {
    return knex.schema.createTable('motorcycles', table => {
        table.increments('id').primary()
        table.string('model').notNull()
        table.integer('owner').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('motorcycles')
};
