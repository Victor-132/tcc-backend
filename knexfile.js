module.exports = {

    client: 'postgresql',
    connection: {
        database: 'mx7',
        user: 'postgres',
        password: 'suasenha@'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }

};
