const Pool = require('pg').Pool;
const { Console } = require('console');
const { query } = require('express');
const pool = new Pool({
  user: 'hqphzezcxezigz',
  host: 'ec2-54-227-246-76.compute-1.amazonaws.com',
  database: 'de74re8hchfnir',
  password: '90666c2149bf70d1f3581fac87b3e359dd3f3363f5b157a1835a63dce33356bd',
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
/*const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATBASE_PASSWORD,
  port: 5432,
  sslmode:true,
  ssl: {rejectUnauthorized: false},
})*/
  module.exports = pool;