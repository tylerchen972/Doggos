const pool = require('../dbconfig');
var passwordHash = require('password-hash');
exports.login = function(request, response){
    var browser_user = request.session.userId;
    message = '';
    var sess = request.session; 
    console.log(request.method);
    if(request.method == "POST" && browser_user == null){
        var post  = request.body;
        var username = post.email;
        var password= post.password;
        pool.query('SELECT * FROM public.user_accounts WHERE (email = $1);', [username], function(error, results, fields) {
            if (results.rowCount > 0) {
                if(passwordHash.verify(password,results.rows[0].password) === true){
                    request.session.userId = results.rows[0].account_id;
                    request.session.user = results[0];
                    response.redirect('profile');
                    response.end();
                }
                else{
                    console.log("Error row count");
                    message = "loginfail";
                    response.render('login',{message: message});
                }
         } 
         else{
             console.log("Erorr no email");
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
       var ofirstname = post.ofirstname;
       var olastname= post.olastname;
        pool.query('SELECT * FROM public.user_accounts WHERE (email = $1);', [email], function(error, results, fields) {
        console.log(results.rowCount);
        if (results.rowCount > 0) {
            message = "signupfailedaccountexist";
            response.render("signup",{message:message});
        } else{

            pool.query('INSERT INTO public.user_accounts(email, password, first_Name, last_Name, owner_first_name, owner_last_name) VALUES ($1, $2, $3, $4, $5, $6) RETURNING account_id;', [email, passwordHash.generate(password),firstname,lastname,ofirstname,olastname], function(error, results, fields) {
                console.log(passwordHash.generate(password));
                if (error) {
                    console.log(error);
                    message = "signupfailedasomethingwentwrong";
                    response.render("signup",{message:message});
                }
                else{
                    message = "signupsuccess";
                    response.render('signup',{message: message});

                    // add (new user: existing user) and (existing user: new user) pairs to available table
                    pool.query('SELECT owner_first_name, owner_last_name FROM public.user_accounts WHERE (owner_first_name != $1 AND owner_last_name != $2);', [ofirstname, olastname], function(error, results, fields){
                        for (var i=0; i<results.rowCount; i++){
                            var existing_user_firstName = results.rows[i].owner_first_name;
                            var existing_user_lastName = results.rows[i].owner_last_name;
                            console.log(existing_user_firstName);
                            console.log(existing_user_lastName);
                            
                            // (new user: existing user)
                            pool.query('INSERT INTO public.available(user_first_name, user_last_name, potential_match_first_name, potential_match_last_name) VALUES($1,$2,$3,$4);', [ofirstname, olastname, existing_user_firstName, existing_user_lastName], function(error, results, fields){
                                console.log(error);
                            });

                            // (existing user: new user)
                            pool.query('INSERT INTO public.available(user_first_name, user_last_name, potential_match_first_name, potential_match_last_name) VALUES($1,$2,$3,$4);', [existing_user_firstName, existing_user_lastName, ofirstname, olastname], function(error, results, fields){
                                console.log(error)
                            });

                        }
                    });

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


exports.editprofile = function(request, response){
    message = '';
    var sess = request.session;
    var browser_user = request.session.userId;
    if(browser_user == null){
        response.redirect("/login");
    }
    if(request.method == "POST"){
        var post  = request.body;
        var firstname = post.firstname;
        var lastname= post.lastname;
        var breed = post.breed;
        var gender= post.gender;
        var bio= post.bio;
       pool.query('UPDATE public.user_accounts SET first_name= $1, last_name=$2, biography=$3, pet_gender=$4, pet_breed=$5 WHERE account_id = $6;', [firstname,lastname,bio,gender,breed,browser_user], function(error, results, fields) {
        if (error) {
            console.log(error);
            message = "profupdatefailed";
            response.render("editprofile",{message:message});
        }
        else{
            message = "profupdatesuccess";
            response.render('editprofile',{message: message});
        }		
        response.end();
    });
    } else {
        response.render('editprofile');
    }
    module.exports = message;
};


exports.explore = function(request, response){
    var browser_user = request.session.userId;
    console.log(browser_user);
    if(browser_user == null){
       response.redirect("/login");
    }
    else{
    
        // get first and last name of current user (owner)
        pool.query('SELECT owner_first_name, owner_last_name FROM public.user_accounts WHERE account_id=$1;', [browser_user], function(error, results, fields){
            var first_name_owner = results.rows[0].owner_first_name;
            var last_name_owner = results.rows[0].owner_last_name;        

            
            pool.query('SELECT * FROM public.matches WHERE (matcher_first_name=$1 AND matcher_last_name=$2);', [first_name_owner, last_name_owner], function(error, results, fields) {      
                if (results.rowCount > 0) {
                    // console.log(results.rows[0].matched_id);
                    message = "loginpass";
                    response.render('explore',{data: results.rows});
                } else{

                    // make another page for no matches?
                    response.send("No matches");
                    // response.redirect("/profile");
                }			
                response.end();
            });

        });
    }       
};


exports.explore_matches = function(request, response){
    console.log(request.method)
    if (request.method == "POST"){
        console.log(request.body)
        // console.log(request.session)
        var matched_firstName = request.body.firstName;
        var matched_lastName = request.body.lastName;
        
        //get users first and last name 
        var user_firstName = "";
        var user_lastName = "";
        pool.query('SELECT owner_first_name, owner_last_name FROM public.user_accounts WHERE account_id=$1', [request.session.userId], function(error, results, fields){
            // console.log(results.rows[0].first_name);
            // console.log(results.rows[0].last_name);
            user_firstName = results.rows[0].owner_first_name;
            user_lastName = results.rows[0].owner_last_name;
            
            //add this matching pair to the matches table
            pool.query('INSERT INTO public.matches(matched_first_name, matched_last_name, matcher_first_name, matcher_last_name) VALUES($1,$2,$3,$4)', [matched_firstName, matched_lastName, user_firstName, user_lastName], function(error, results, fields){
                
                //remove the matched pair from the available table
                pool.query('DELETE FROM public.available WHERE (user_first_name=$1 AND user_last_name=$2 AND potential_match_first_name=$3 AND potential_match_last_name=$4);', [user_firstName, user_lastName, matched_firstName, matched_lastName], function(error, results, fields){

                    //also need to remove the vice versa pairing
                });

            });
        });


        response.redirect("/explore_matches");
        
    }else{

        var browser_user = request.session.userId;
        // console.log(browser_user);
        if(browser_user == null){
        response.redirect("/login");
        }
        else{

            // get owner name of current user
            pool.query('SELECT owner_first_name, owner_last_name FROM public.user_accounts WHERE account_id=$1;', [browser_user], function(error, results, fields){
                var current_user_first_name = results.rows[0].owner_first_name;
                var current_user_last_name = results.rows[0].owner_last_name;
                
                // get all available pairings for the current user
                pool.query('SELECT potential_match_first_name, potential_match_last_name FROM public.available WHERE (user_first_name=$1 AND user_last_name=$2);', [current_user_first_name, current_user_last_name], function(error, results, fields) {      
                    if (results.rowCount > 0) {            
                        response.render('explore_matches',{data: results.rows});
                    } else{

                        // need to do something else here
                        response.redirect("/profile");
                    }			
                    response.end();
                });

            });
        }
    }        
};


exports.search = function(request, response){
    var get = request.body;
    var id = get.accountidsearched;
    var browser_user = request.session.userId;
    if(browser_user == null){
       response.redirect("/login");
    }
    else{
    pool.query('SELECT * FROM public.user_accounts WHERE (account_id = $1);', [id], function(error, results, fields) {   
        if (results.rowCount > 0) {
            response.render('search',{data: results.rows});
        } else{
            console.log("here1");
            message = "Nouser";
            response.redirect('profile');
        }			
        response.end();
    });

    }
    
            
};