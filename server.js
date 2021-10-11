avar expressApp = require('express'),http = require('http'), routes = require('./routes'), account = require('./routes/account'), path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
const pool = require('./dbconfig');
var app = expressApp();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

var host = "0.0.0.0";
var port = "5000";
if(process.argv.length > 2){
    port = process.argv[2];
}

app.listen(process.env.PORT || 5000,host);
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use("/src/styles", expressApp.static(__dirname + '/src/styles'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', routes.index);
app.post('/login',account.login);
app.get('/login',account.login);
app.post('/logout',account.logout);
app.get('/logout',account.logout);
