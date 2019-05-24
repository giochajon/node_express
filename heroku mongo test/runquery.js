// best source : http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/#connect-to-mongodb


var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//var url = 'mongodb://192.168.1.74:27017/learning_mongo';


// Connect to the db
//const url = "mongodb://heroku_1r2h36w6:8aq7rr3ic6vpvf9jgvujgspadb@ds261296.mlab.com:61296/heroku_1r2h36w6"
const url = "mongodb://mickey:miguelito1@ds261296.mlab.com:61296/heroku_1r2h36w6"




// Database Name
const dbName = 'heroku_1r2h36w6';



const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('giodocuments');
  // Insert some documents
  collection.insertMany([
    {user : "pete"}, {user : "joe"}, {user : "frank"}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}


const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('giodocuments');
  // Find some documents
  collection.find({
  	//"tourPrice":{$lte:100},
  	//"tourLength":{$lte:1},
    "user":"gio"
    }).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}


// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
       client.close();
    });

 findDocuments(db, function() {
      client.close();
    });
});
