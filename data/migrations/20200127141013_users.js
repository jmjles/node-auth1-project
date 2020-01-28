exports.up = async knex => {
  await knex.schema.createTable('users', tbl => {
      tbl.increments('user_id')
      tbl.string("username").notNullable()
      tbl.string("password").notNullable()
  })
};

exports.down = async knex => {
  await knex.schema.dropTable('users')
};
