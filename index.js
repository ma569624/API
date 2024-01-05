const express = require('express');
const app = express();
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 5000 ;


const router = require('./routes/products')

app.get('/',  (req, res) => {
    res.send("I am live");
});

//middleware

app.use("/api/products", router);

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