const { HomeBanner } = require('../models/Home')
const uri = process.env.URI;
const { MongoClient } = require('mongodb');
const { BannerHelper } = require('./helper/Helper');
const path = require('path');

const getHomeBanner = async (req, res) => {
    const mydata = await HomeBanner.find(req.query);
    res.status(200).json(mydata);
};

const postHomeBanner = async (req, res) => {

    const client = new MongoClient(uri);

    // Access the database and collection
    const database = client.db('Cluster12');
    const collection = database.collection('homebanners');

    // Insert the document into the collection
    const data = BannerHelper(req);
    const result = await collection.insertOne(data);
    console.log('Inserted homebanner with ID:', result.insertedId);
    res.status(200).json({ message: 'Banner created successfully', data });
}

const EditHomeBanner = async (req, res) => {
    try {
        const data = BannerHelper(req);
        const itemId = req.params.id;
        const updatedItem = await HomeBanner.findByIdAndUpdate(itemId, data, {
            new: true, // return the modified document rather than the original
        });
        res.json(updatedItem);
    }

    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const DeleteHomeBanner = async (req, res) => {
    const Id = req.params.id;

    try {
        // Use deleteOne to delete a document by its ID
        const result = await HomeBanner.deleteOne({ _id: Id });
        // Check if the product was found and deleted
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        // Respond with a success message
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



module.exports = { getHomeBanner, postHomeBanner, EditHomeBanner, DeleteHomeBanner };
