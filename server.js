var mysql = require('mysql');
var express = require("express");
var app = express();


var con = mysql.createConnection({
  host: "localhost",
  user: "foo",
  password: "bar",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
});


app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.get("/url", (req, res, next) => {
  var sql = "SELECT * FROM Persons where id="+req.query.key;
  x=con.query(sql, function (err, result) {
    if (err) throw err;
	console.log(result)
    res.json[result]
  });
  res.json(x)
 // res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


app.post('/write', function(req, res) {
    var key = req.query.key
    var value = req.query.value;

	var sql = "INSERT INTO Persons (id,value) VALUES("+key+","+value+")"
  	x=con.query(sql, function (err, result) {
    	if (err) throw err;
    	res.json[result]
  });
	res.json(x)
});
