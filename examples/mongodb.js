const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/team_crosswords';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const result = db.stats()
    .then((result) => {
      console.log(result);
    });
  db.close();

  // findDocs(db);
  // insertDocs(db);
  // updateDocs(db);
  // dropDocs(db);
  // db.close();
});

const insertDocs = (db) => {
  db.insertMany({

  })
};

const findDocs = (db) => {
  const collection = db.collection('documents');
  collection.find().toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
