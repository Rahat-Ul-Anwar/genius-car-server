const express = require('express');
const cors = require('cors');

const app = express();
 
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    
    res.send('Genius car node mongo is running');
})

app.listen(port, () => {
    
    console.log("Genius car node mongo crud server is running on port", port)
})