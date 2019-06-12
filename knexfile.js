// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './server/data/migrations',
      tablenName: 'dbmigrations'
    },
    seeds: {
      directory: './server/data/seeds'
    }
  },
};
