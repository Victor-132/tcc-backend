
exports.up = function(knex) {
    return knex.schema.table('budget', table => {
        table.foreign('client').references('id').inTable('users')
      })
};

exports.down = function(knex) {
    return knex.schema.table('budget', table => {
        table.dropForeign('client')
    })
};
