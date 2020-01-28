const knex = require('knex')(require('./knexfile').development)
const db = knex("users")

exports.users = db

exports.register = newuser => knex('users').insert(newuser)

exports.login = user => knex("users").where(user);