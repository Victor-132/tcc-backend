
exports.up = function(knex) {
    return knex.schema.createTable('historic', table => {
        table.integer('id').primary().references('id').inTable('motorcycle')
        table.string('desc').notNull()
        table.dateTime('madeIn')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('historic')
};
