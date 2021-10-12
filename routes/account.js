const pool = require('../dbconfig');
exports.login = function(request, response){
    var browser_user = request.session.userId;
    message = '';
    var sess = request.session; 
    console.log(request.method);
    if(request.method == "POST" && browser_user == null){
        var post  = request.body;
        var username = post.email;
        var password= post.password;
        pool.query('SELECT * FROM public.user_accounts WHERE (email = $1 AND password= $2);', [username, password], function(error, results, fields) {
         if (results.rowCount > 0) {
             request.session.userId = results.rows[0].account_id;
             console.log(request.session.userId);
             request.session.user = results[0];
             response.redirect('profile');
         } else{
             console.log(error);
             message = "loginfail";
             response.render('login',{message: message});
         }			
         response.end();
     });
     } else if(request.method == "GET" && browser_user == null) {
         response.render('login');
     }
     else{
         response.redirect('/logout');
     }

    module.exports = message;
 };

 exports.index = function(request, response){
    response.render('/');
            
 };
 exports.logout=function(request,response){
    request.session.destroy(function(err) {
        response.redirect("/login");
    })
 };
 exports.signup = function(request, response){
    message = '';
    var sess = request.session; 
    console.log(request.method);
    if(request.method == "POST"){
       var post  = request.body;
       var email = post.email;
       var password= post.password;
       var firstname = post.firstname;
       var lastname= post.lastname;
        pool.query('SELECT * FROM public.user_accounts WHERE (email = $1);', [email], function(error, results, fields) {
        console.log(results.rowCount);
        if (results.rowCount > 0) {
            message = "signupfailedaccountexist";
            response.render("signup",{message:message});
        } else{
            pool.query('INSERT INTO public.user_accounts(email, password, First_Name, Last_Name) VALUES ($1, $2, $3, $4) RETURNING account_id;', [email, password,firstname,lastname], function(error, results, fields) {

                if (error) {
                    console.log(error);
                }
                else{
                    message = "signupsuccess";
                    response.render('signup',{message: message});
                }
            });
        }			

    });
    } else {
        response.render('signup');
    }
    module.exports = message;       
 };
 exports.profile = function(request, response){
    var browser_user = request.session.userId;
    console.log(browser_user);
    if(browser_user == null){
       response.redirect("/login");
    }
    else{
    pool.query('SELECT * FROM public.user_accounts WHERE (account_id = $1);', [browser_user], function(error, results, fields) {      
        if (results.rowCount > 0) {
            console.log(results.rows[0].pet_gender);
            message = "loginpass";
            response.render('profile',{data: results.rows});
        } else{

            response.redirect("/login");
        }			
        response.end();
    });
    }
    
            
 };
