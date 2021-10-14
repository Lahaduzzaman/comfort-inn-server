const mongoose = require('mongoose');

var mongoURL = `mongodb+srv://lahad:lahad2@cluster0.eaaai.mongodb.net/mern`

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on('error', () => {
    console.log("MongoD connection failed")
})

connection.on('connected', () => {
    console.log("MongoDB connection successful")
})

module.exports = mongoose;