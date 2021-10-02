var express = require("express");

var app = express();
var host = "0.0.0.0";
var port = "5000";

app.use(express.static("public"));
if(process.argv.length > 2) {
    port = process.argv[2];
}

app.listen(port, host, () => {
    console.log(host, port);
});

// https://expressjs.com/en/guide/database-integration.html#postgresql
// https://www.postgresql.org/docs/14/external-interfaces.html
// https://node-postgres.com/

const { Client } = require("pg");
const dbURL = process.env.DATABASE_URL;

const client = new Client({
    user: 'stevenji',
    password: '',
    host: 'doggos.herokuapp.com',
    database: 'doggos',
    connectionString: dbURL,
    ssl: 'true'
})

client.connect((err) => {
    if (err){
        console.log(err)
    }
});

client.query('CREATE TABLE test (col1  string, col2  string)', (err, res) => {
    if (err){
        console.log(err)
    }
});

client.query('INSERT INTO test(col1, col2) VALUES ("hello", "world")', (err, res) => {
    if (err){
        console.log(err)
    }else{
        console.log(res.row[0])
    }
});

client.query('SELECT * FROM test', (err, res) => {
    if (err){
        console.log(err)
    }else{
        console.log(res)
    }
});

client.end()



