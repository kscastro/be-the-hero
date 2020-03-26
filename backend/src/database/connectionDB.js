const knex = require('knex');
const config = require('../../knexfile');

const connectionDB = knex(config.development);

module.exports = connectionDB;