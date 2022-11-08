const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
 
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// password : 2g4e1r3r82rqVu5M
//userName: geniusDBUser

 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yagkdpa.mongodb.net/?retryWrites=true&w=majority`;

 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



app.get('/', (req, res) => {
    
    res.send('Genius car node mongo is running');
})

app.listen(port, () => {
    
    console.log("Genius car node mongo crud server is running on port", port)
})