const express = require('express');
const app = express();
const connectDB = require("./db/connect")

const multer = require('multer');
const PORT = process.env.PORT || 5000 ;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

const router = require('./routes/products');
const homerouter = require('./routes/homeroute');


app.get('/',  (req, res) => {
    res.send("I am live");
});

app.use("/api/products", router);
app.use("/api/home", homerouter);

app.use('/profile', express.static('upload/images'));

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()


// mongodb+srv://manishfrontenddeveloper:HelloManish2025@cluster12.keyzrxr.mongodb.net/Cluster12?retryWrites=true&w=majority
