var expressApp = require('express'),http = require('http'), routes = require('./routes'), account = require('./routes/account'), path = require('path');
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
app.post('/signup',account.signup);
app.get('/signup',account.signup);
app.post('/logout',account.logout);
app.get('/logout',account.logout);
app.post('/profile',account.profile);
app.get('/profile',account.profile);
app.post('/edit',account.editprofile);
app.get('/edit',account.editprofile);
app.get('/explore',account.explore);