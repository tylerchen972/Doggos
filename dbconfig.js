const Pool = require('pg').Pool;
const { Console } = require('console');
const { query } = require('express');
const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATBASE_PASSWORD,
  port: 5432,
  sslmode:true,
  ssl: {rejectUnauthorized: false},
})


/*const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'doggos_master',
    password: 'root',
    port: 5432,
  })*/

  module.exports = pool;

