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
const path = require("path");
//middleware

// storage engine 

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000
    }
})

app.post('/api/products', upload.single('image'), (req, res) => {
    // Access form fields and uploaded files using req.body and req.file
    const productName = req.body.name;
    const productPrice = req.body.price;
    const productImage = req.file.buffer; // Use req.file.buffer to access the file buffer
  
    // Perform product creation logic (e.g., save to database)
    // For demonstration purposes, we'll just log the details
    console.log('Product Name:', productName);
    console.log('Product Price:', productPrice);
    // console.log('Product Image Size:', productImage.length);
  
    // Respond with a success message
    res.json({ message: 'Product created successfully' });
  });


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