const ServiceSchema = require('../models/Service')
const uri = process.env.URI;
const { MongoClient } = require('mongodb');
const { ServiceHelper } = require('./helper/Helper');

const getService = async (req, res) => {
    const result = await ServiceSchema.find(req.query);
    res.status(200).json(result);
}
const postService = async (req, res) => {

    try {
        const client = new MongoClient(uri);

        const database = client.db('Cluster12');
        const collection = database.collection('services')

        const data = ServiceHelper(req);
        const result = await collection.insertOne(data);
        console.log('Inserted homebanner with ID:', result.insertedId);
        res.status(200).json({ message: 'Service created successfully', data });
    } catch (error) {
        res.status(400).json({ message: "data incrupt please check formate", error })
    }
}
const updateService = async (req, res) => {
    try {
        const data = ServiceHelper(req);
        const Service_ID = req.params.id;
        const result = await ServiceSchema.findByIdAndUpdate(Service_ID, data, {
            new: true,
        });
        res.status(200).json({ message: "Service successfully Update of service id", result });
    } catch (error) {
        res.status(400).json({ message: "internal error" });
    }

}
const deleteService = async (req, res) => {
    try {
        const S_ID = req.params.id;
        const result = await ServiceSchema.deleteOne({_id: S_ID})
        if(result.deletedCount === 0){
            res.status(404).json({message: 'service not found'})
        }
        res.status(200).json({ message: "service delete succesfully"})
    } catch (error) {
        res.status(400).json({message: 'internal error for delete service'})
    }
}

module.exports = { getService, postService, updateService, deleteService }