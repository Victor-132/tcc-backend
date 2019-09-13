
exports.up = function(knex) {
    return knex.schema.table('historic', table => {
        table.foreign('owner').references('id').inTable('users')
      })
};

exports.down = function(knex) {
    return knex.schema.table('historic', table => {
        table.dropForeign('owner')
    })
};
