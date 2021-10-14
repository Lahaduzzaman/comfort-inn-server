const express = require('express');

const app = express();

const dbConfig = require('./db');


const port = process.env.PORT || 5000;


// mongodb+srv://<username>:<password>@cluster0.eaaai.mongodb.net/test

app.listen(port, () => console.log("Node server is working with nodemon"));