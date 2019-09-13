
exports.up = function(knex) {
    return knex.schema.table('motorcycles', table => {
        table.foreign('owner').references('id').inTable('users')
      })
};

exports.down = function(knex) {
    return knex.schema.table('motorcycles', table => {
        table.dropForeign('owner')
    })
};
