
exports.up = function(knex) {
    return knex.schema.table('users', table => {
        table.boolean('admin').default('false')
      })
};

exports.down = function(knex) {
    return knex.schema.table('users', table => {
        table.dropColumn('admin')
      })
};
