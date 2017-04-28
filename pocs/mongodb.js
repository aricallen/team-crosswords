const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/team_crosswords';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {

  const result = db.stats()
    .then((result) => {
      console.log(result);
    })
    .then(() => {
      db.close();
    });
});