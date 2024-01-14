const connectDB = require('../db/connect');
const AboutSchema = require('../models/about');
const { AboutHelper } = require('./helper/Helper');
const { MongoClient } = require('mongodb');
const uri = process.env.URI;

const getAbout = async (req, res) => {
    try {
        const result = await AboutSchema.find();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({message : "internal server error"})
    }
}

const postAbout = async (req, res) => {
    try {
        const client = new MongoClient(uri);

        const database = client.db('Cluster12');
        const collection = database.collection('abouts')

        const data = AboutHelper(req);
        
        const result = await collection.insertOne(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message: "internal server error"});
    }
}
const putAbout = async (req, res) => {
    try {
        const ID = req.params.id;
        const data = AboutHelper(req);
        const result = await AboutSchema.findByIdAndUpdate(ID, data, {
            new: true
        })
        res.status(200).json({message: "about us has update", result})
    } catch (error) {
        res.status(400).json({message: "internal server error"});
    }
}
const deleteAbout = async (req, res) =>{
    try {
        const ID = req.params.id;
        const result = await AboutSchema.deleteOne({_id: ID})
        if(result.deletedCount === 0){
            res.status(404).json({message: " id not found"})
        }
        res.status(200).json({message: "delete successful"});
    } catch (error) {
        res.status(400).json({message: "internal server error"});
    }
}

module.exports = {getAbout, postAbout, putAbout, deleteAbout}