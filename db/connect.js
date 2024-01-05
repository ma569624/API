const mongoose = require('mongoose');

const uri = "mongodb+srv://manishfrontenddeveloper:HelloManish2025@cluster12.keyzrxr.mongodb.net/Cluster12?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("connect Database");
    return mongoose.connect(uri)
}

module.exports = connectDB;