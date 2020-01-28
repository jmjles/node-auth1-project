// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: __dirname + "/users.db3"
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    useNullAsDefault:true
  }
}
