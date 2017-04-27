const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/team_crosswords';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});
