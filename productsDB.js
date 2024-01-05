const connectDB = require("./db/connect");
const Product = require('./models/product')

const uri = "mongodb+srv://manishfrontenddeveloper:HelloManish2025@cluster12.keyzrxr.mongodb.net/Cluster12?retryWrites=true&w=majority";
const ProductJson = require("./products.json");

const start = async () => {
    try {
        await connectDB(uri);
        await Product.create(ProductJson);
        console.log("Success");
    } catch (error) {
        console.log(error)
    }
};

start();
