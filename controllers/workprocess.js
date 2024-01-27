const WorkSchema = require('../models/workprocess')
const uri = process.env.URI;
const { MongoClient } = require('mongodb');
const { workHelper } = require('./helper/Helper');

const getWork = async (req, res) => {
    const data = await WorkSchema.find(req.query);
    res.status(200).json(data);
}

const postWork = async (req, res) => {

    try {
        const client = new MongoClient(uri);

        const database = client.db('Cluster12');
        const collection = database.collection('works')

        const data = workHelper(req);
        const result = await collection.insertOne(data);
        console.log('Inserted data with ID:', data);
        res.status(200).json({ message: 'work created successfully', data });
    } catch (error) {
        res.status(400).json({ message: "data incrupt please check formate", error })
        console.log(error)
    }

}

const updateWork = async (req, res) => {
    try {
        const data = workHelper(req);
        const work_ID = req.params.id;
        const result = await WorkSchema.findByIdAndUpdate(work_ID, data, {
            new: true,
        });
        res.status(200).json({ message: "testimonial successfully Update of testimonial id", result });
    } catch (error) {
        res.status(400).json({ message: "internal error" });
    }
}
const deleteWork = async (req, res) => {
    try {
        const S_ID = req.params.id;
        const result = await WorkSchema.deleteOne({ _id: S_ID })
        if (result.deletedCount === 0) {
            res.status(404).json({ message: 'testimonial not found' })
        }
        res.status(200).json({ message: "testimonial delete succesfully" })
    } catch (error) {
        res.status(400).json({ message: 'internal error for delete testimonial' })
    }
}

module.exports = { getWork, postWork, updateWork, deleteWork };