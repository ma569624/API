const Products = require('../models/product');

const getAllProducts = async (req, res) => {
    const mydata = await Products.find(req.query); 
    res.status(200).json({ mydata });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg : "I am getting all products Tesing"});
};

module.exports = { getAllProducts, getAllProductsTesting }