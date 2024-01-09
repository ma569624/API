const express = require('express');
const app = express();
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 5000 ;
const host = process.env.HOST || 'localhost';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

// const router = require('./routes/products');
const homerouter = require('./routes/homeroute');


app.get('/',  (req, res) => {
    res.send("I am live");
});

// app.use("/api/products", router);
app.use("/api/home", homerouter);

app.use('/profile', express.static('upload/images'));
const path = require("path");
//middleware



const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running at http://${host}:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()


// mongodb+srv://manishfrontenddeveloper:HelloManish2025@cluster12.keyzrxr.mongodb.net/Cluster12?retryWrites=true&w=majority