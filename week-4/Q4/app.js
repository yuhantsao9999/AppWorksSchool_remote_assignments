var express = require("express");
var mysql = require('mysql');

var app = express();

app.use(express.static('./'));

app.get('./', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log("伺服器已經啟動在http://localhost:3000/");
});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "gaga0224",
    database: "assignment"
});

con.connect(function(err) {
    if (err) throw err;
})

app.get('/sp', function(req, res) {
    var email = req.query.email;
    var pwd = req.query.pwd;

    var sql2 = "INSERT INTO user (email, password) VALUES ('" + email + "', '" + pwd + "')";
    con.query(sql2, function(err, result) {
        if (err) throw err;
    });
    var sql1 = "select email from user group by email having count(email) > 1;";
    con.query(sql1, function(err, result) {
        if (err) throw err;
        if (String(result).length > 1) {
            // delete from user where email in (select email from user group by email having count(email) > 1);
            // -> You can't specify target table 'user' for update in FROM clause
            var sql3 = "delete from user where email in (select email from (select * from user) as usersub group by email having count(email) > 1);";
            con.query(sql3, function(err, result) {
                if (err) throw err;
            })
            res.send("The email is repeated;");
        } else {
            res.send("Sing up successfully!!!!!!");
        }
    });
});

app.get('/si', function(req, res) {
    var email = req.query.email;
    var pwd = req.query.pwd;
    var sql = "select * from user where email='" + email + "' and password='" + pwd + "';";
    con.query(sql, function(err, result) {
        if (err) throw err;
        if (String(result).length > 1) {
            res.send("Welcome!!!!!");
        } else {
            res.send("Wrong email or Wrong password!!!!");
        }
    })

});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "assignment",
//     password: "gaga0224"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });