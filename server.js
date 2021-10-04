
var expressApp = require('express');
var mysql = require('mysql');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
const e = require('express');


/*var connection = mysql.createConnection({
	host     : 'sql5.freemysqlhosting.net',
	user     : 'sql5442040',
	password : 'VuGCrQTbm5',
	database : 'sql5442040'
});*/

  user: 'hqphzezcxezigz',
  host: 'ec2-54-227-246-76.compute-1.amazonaws.com',
  database: 'de74re8hchfnir',
  password: '90666c2149bf70d1f3581fac87b3e359dd3f3363f5b157a1835a63dce33356bd',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  },
})

var app = expressApp();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/login', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/profile', function(request, response) {
    if (request.session.loggedin) 
    {
	    response.sendFile(path.join(__dirname + '/profile.html'));
    }
    else{
        response.redirect('/login');
    }
});
app.get('/explore', function(request, response) {
    if (request.session.loggedin) 
    {
	    response.sendFile(path.join(__dirname + '/explore.html'));
    }
    else{
        response.redirect('/login');
    }
});
app.post('/verify', function(request, response) {
	var email = request.body.email;
	var password = request.body.password;
	if (email && password) {
		pool.query('SELECT * FROM user_accounts WHERE (Email = $1 AND Password = $2)', [email, password], function(error, results, fields) {
			console.log(password);
			console.log(email);
			console.log(error);
			if (!error) {
				request.session.loggedin = true;
				request.session.email = email;
				response.redirect('/home');
			} else if(error) {
				response.send('The email or password your entered is incorrect');
			}			
			response.end();
		});
	} else {
		response.send('Please enter your email and password');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) 
    {
		response.send('Welcome to doggos, ' + request.session.email + '!');
	} 
    else 
    {
		response.send('Error: User not logged in');
	}
	response.end();
});
app.get('/logout',function(request,response){
    if(request.session.loggedin ){
        request.session.loggedin = false;
        response.redirect("/");
        response.send("You are now logged out");
    }
    else{response.redirect("/");}
})
var host = "0.0.0.0";
var port = "5000";
if(process.argv.length > 2){
    port = process.argv[2];
}
app.listen(process.env.PORT || 5000,host);