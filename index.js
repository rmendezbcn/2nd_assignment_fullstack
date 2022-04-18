
const express  = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", (request, response) => {
    response.send(index.html);
});

app.listen(3000, () => console.log('Static server listening on the port 3000'));


const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:3000'
const dbName = 'memoryCardGame'

mongo.connect(url, (err, client) => {
    if(err) {
        console.error(err);
        return
    }
    console.log('successfuly connected to the server db');
    const db = client.db(dbName);
    const collection = db.collection('games');
    
    collection.insertOne({ mode: 'solo', name: 'User1'}, ((error, item) => {
        if(error) {
         console.error(error)
         return
        }
         console.log(item)
        }))
});

