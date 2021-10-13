const express = require('express');

const app = express();

const port = process.env.PORT || 5000;


// mongodb+srv://<username>:<password>@cluster0.eaaai.mongodb.net/test

app.listen(port, () => console.log("Node is working with nodemon"));