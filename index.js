const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
 
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// password : 2g4e1r3r82rqVu5M
//userName: geniusDBUser

 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yagkdpa.mongodb.net/?retryWrites=true&w=majority`;

 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {
        const serviceCollection = client.db('geniusCar').collection('services');

        app.get('/services', async (req, res) => {
            
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });
      
         // for getting specific id

        app.get('/services/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await serviceCollection.findOne(query);
            res.send(service);
            
           

        } )

    }
    finally {
        


   } 

}

run().catch(error => console.error(error))




app.get('/', (req, res) => {
    
    res.send('Genius car node mongo is running');
})

app.listen(port, () => {
    
    console.log("Genius car node mongo crud server is running on port", port)
})