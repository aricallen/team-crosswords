var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var str = "";

app.route('/Employeeid').get(function(req, res) {
    MongoClient.connect(url, function(err, db) {
      var cursor = db.collection('Employee').find();

      cursor.each(function(err, item) {
        if (item !== null) {
          str = str + "    Employee id  " + item.Employeeid + "</br>";
        }
      });
      res.send(str);

    });
  });

var server = app.listen(3000, function() {});
