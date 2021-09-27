var express = require("express");

var app = express();
var host = "0.0.0.0";
var port = "5000";


app.use(express.static("public"));

app.listen(port, host, () => {
    console.log(host, port)
});

