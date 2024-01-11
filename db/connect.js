const mongoose = require('mongoose');

const uri = process.env.URI;

const connectDB = () => {
    console.log("connect Database");
    return mongoose.connect(uri)
}

module.exports = connectDB;