var express = require("express");

var app = express();
var host = "0.0.0.0";
var port = "5000";

app.use(express.static("public"));
if(process.argv.length > 2) {
    port = process.argv[2];
}

app.listen(port, host, () => {
    console.log(host, port)
});

// https://expressjs.com/en/guide/database-integration.html#postgresql
// https://www.postgresql.org/docs/14/external-interfaces.html
// https://node-postgres.com/


const { Client } = require("pg");
const dbURL = process.env.DATABASE_URL;

console.log(dbURL);
console.log(dbURL);
console.log(dbURL);
console.log(dbURL);
console.log(dbURL);
console.log(dbURL);
console.log(dbURL);
console.log(dbURL);
console.log(dbURL);
console.log(dbURL);
console.log(dbURL);
console.log(dbURL);

// const client = new Client({
//     dbURL,
// })

// client.connect();

// client.query('CREATE TABLE test (col1  string, col2  string);');

// client.query('INSERT INTO test VALUES ("hello", "world");');

// var db_test = client.query('SELECT * FROM test;');

// console.log(process.env.DATABASE_URL);

client.end()



