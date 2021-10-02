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

var postgresSQL = require("pg-promise");
var db = postgresSQL(process.env.DATABASE_URL); 

db.one('CREATE TABLE test (col1     string, col2    string);');

db.one('INSERT INTO test VALUES ("hello", "world");'); 

// db.one('SELECT * FROM test;').then(function (data) {
//     console.log('DATA: ', data.value).catch(function (error) {
//         console.log('ERROR: ', error)
//     })
// });


