const { Feature } = require('../models/Home');
const { FeaturHelper } = require('./helper/Helper')
const uri = process.env.URI;
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const getFeature = async (req, res) => {
    try {
        const products = await Feature.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// const getFeature = async (req, res) => {
//     const result = await Feature.find();
//     res.status(200).json({result});
// };

const postFeature = async (req, res) => {
    const data = FeaturHelper(req);
    const client = new MongoClient(uri);

    // Access the database and collection
    const Database = client.db("Cluster12");
    const collection = Database.collection("features");
    const result = await collection.insertOne(data);
    console.log('Inserted feature with ID:', result.insertedId);
    res.status(200).json({ message: 'featur created successfully', result });
}

const updateFeature = async (req, res) => {
    try {
        const ID = req.params.id;
        const data = FeaturHelper(req);
        const result = await Feature.findByIdAndUpdate(ID, data, { new: true })
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internel server error' })
    }
}

const deleteFeature = async (req, res) => {
    try {
        const ID = req.params.id;
        const result = await Feature.deleteOne({ _id: ID })

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({message: 'delete succesfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' });
    }
}

module.exports = { getFeature, postFeature, updateFeature, deleteFeature }
