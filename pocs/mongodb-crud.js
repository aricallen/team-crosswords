const {
  MongoClient,
  ObjectId
} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/team_crosswords';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  const data = { "date": Date.now() };
  const manyData = [data, data, data];
  const forceServerObjectId = true;

  // insert one
  db.collection('puzzles').insertOne(data, { forceServerObjectId })
    // insert many
    .then(() => {
      return db.collection('puzzles').insertMany(manyData, { forceServerObjectId });
    })
    // find all
    .then(() => {
      return db.collection('puzzles').find().toArray();
    })
    // display all then delete
    .then((docs) => {
      console.log(`docs:`, docs);
      docs.forEach((doc) => {
        console.log('deleting object with id', doc._id);
        db.collection('puzzles').deleteOne({
          "_id": ObjectId(doc._id)
        });
      });
      return db.collection('puzzles').find().toArray();
    })
    .then((docs) => {
      console.log('remaining docs: ', docs);
      console.log('remaining count', docs.length);
    })
    .then(() => {
      db.close();
    })
    .catch((error) => {
      console.log(`error:`, error);
    });
});
