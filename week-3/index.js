var express = require("express");
var cookieParser = require('cookie-parser');
// Q1
var app = express(); //產生express application物件
app.get("/", function(rel, res) { //當使用者連線到伺服器的根目錄(/)時，做出回應
    res.send("Hello, My Server!")
});

// Q2
app.get("/getData", function(req, res) { //當使用者連線到伺服器的目錄(/getData)時，做出回應
    var sum = Number(0);
    for (var i = 1; i <= req.query.number; i++) {
        sum += i;
    };
    if (!isNaN(req.query.number)) {
        res.send(String(sum));
    } else {
        if (req.query.number === undefined)
            res.send("Lack of Parameter")
        else
            res.send("Wrong Parameter")
    }
});

// Q3
app.use(express.static('./'));

app.listen(3000, function() {
    console.log("伺服器已經啟動在http://localhost:3000/");
});

// Q4
app.use(cookieParser());

app.get("/trackName", function(req, res) {
    var getname = req.query.name;
    res.cookie('UserName', getname);
    // res.redirect("/myName"); //不能跳轉兩次所以改用前端跳轉
    res.send("GG")
        // get一定要有回傳值?
});

app.get("/myName", function(req, res) {
    // res.cookie("User", "123123123123");
    if (req.cookies.UserName === undefined) {
        res.redirect('trackName.html');
    } else {
        res.send("The user name is : " + req.cookies.UserName);
    }
});