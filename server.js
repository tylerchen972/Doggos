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

