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
