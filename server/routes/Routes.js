/**
 * Created by Vladislav on 22.01.2018.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'root',
    database: 'mydb'
});

connection.connect(function(error) {
    if(!!error){
        console.log("Error mysql");
    }else {
        console.log("MySQL connected");
    }
});

exports.register = function(req,res){
    // console.log("req",req.body);
    var users={
        "first_name":req.body.first_name,
        "last_name":req.body.last_name,
        "email":req.body.email,
        "password":req.body.password
    }

    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (!!error) {
            console.log("error ocurred",error);
            res.send({
                "code":400,
                "failed":"error ocurred"
            })
        }else{
            console.log('The solution is: ', results);
            res.send({
                "code":200,
                "success":"user registered sucessfully"
            });
        }
    });
};

exports.login = function(req,res){
    var email= req.body.email;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
        if (!!error) {
            // console.log("error ocurred",error);
            res.send({
                "code":400,
                "failed":"error ocurred"
            })
        }else{
            if(results.length >0){
                if([0].password == password){
                    res.send({
                        "code":200,
                        "success":"login sucessfull"
                    });
                }
                else{
                    res.send({
                        "code":204,
                        "success":"Email and password does not match"
                    });
                }
            }
            else{
                res.send({
                    "code":204,
                    "success":"Email does not exits"
                });
            }
        }
    });
};

exports.getnone = function(req,res){
    connection.query("SELECT * FROM mytable" , function(error, rows, fields) {
        if(!!error){
            console.log("Error in the query");
        }else {
            console.log("Successful query");
            console.log(rows);
            res.send(rows);
        }
    });
}