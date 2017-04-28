const {
  MongoClient
} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/team_crosswords';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  const data = { "date": Date.now() };

  db.collection('puzzles').insertOne(data)
    .then(() => {
      return db.collection('puzzles').find().toArray();
    })
    .then((result) => {
      console.log(`result:`, result);
    })
    .then(() => {
      db.close();
    })
    .catch((error) => {
      console.log(`error:`, error);
    });
});
