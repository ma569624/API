const HomeBanner = require('../models/Homebanner')
const uri = "mongodb+srv://manishfrontenddeveloper:HelloManish2025@cluster12.keyzrxr.mongodb.net/Cluster12?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');

const getHomeBanner = async (req, res) => {
    const mydata = await HomeBanner.find(req.query);
    res.status(200).json({ mydata });
};

const postHomeBanner = async (req, res) => {
    const imgurl = `http://localhost:5000/profile/${req.file.filename}`;
    const subheading = req.body.subheading;
    const heading = req.body.heading;
    const shortdesc = req.body.shortdesc;

    const client = new MongoClient(uri);
    await client.connect();

    // Access the database and collection
    const database = client.db('Cluster12');
    const collection = database.collection('homebanners');

    // Insert the document into the collection
    const data = { imgurl, subheading, heading, shortdesc }
    const result = await collection.insertOne(data);
    console.log('Inserted product with ID:', result.insertedId);
    res.status(200).json({ message: 'Banner created successfully', data });
}


module.exports = postHomeBanner;