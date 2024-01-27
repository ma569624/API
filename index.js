const express = require('express');
require('dotenv').config();
const app = express();
const connectDB = require("./db/connect")
const homerouter = require('./routes/homeroute');
const ServiceRouter = require('./routes/serviceroute');
const PORT = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
const aboutroute = require('./routes/aboutroute');
const TestimonialRouter = require('./routes/Testimonialsroute');
const workRouter = require('./routes/workprocess');

// app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.send("I am live");
});

app.use("/api/home", homerouter);
app.use("/api", ServiceRouter);
app.use("/api", aboutroute);
app.use("/api", TestimonialRouter);
app.use("/api", workRouter);

app.use('/image', express.static('upload/images'));


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
