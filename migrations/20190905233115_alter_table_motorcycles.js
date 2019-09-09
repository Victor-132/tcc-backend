
exports.up = function(knex) {
    return knex.schema.table('motorcycles', table => {
        table.boolean('status').default('false')
      })
};

exports.down = function(knex) {
    return knex.schema.table('motorcycles', table => {
        table.dropColumn('status')
      })
};
