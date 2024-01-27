const TestimonialSchema = require("../models/testimonial")
const uri = process.env.URI;
const { MongoClient } = require('mongodb');
const { testimonialHelper } = require('./helper/Helper');

const getTestimonials = async (req, res) => {
    const data = await TestimonialSchema.find(req.query);
    res.status(200).json(data);
}

const postTestimonials = async (req, res) => {
    try {
        const client = new MongoClient(uri);

        const database = client.db('Cluster12');
        const collection = database.collection('testimonials')

        const data = testimonialHelper(req);
        const result = await collection.insertOne(data);
        console.log('Inserted homebanner with ID:', result.insertedId);
        res.status(200).json({ message: 'testimonial created successfully', data });
    } catch (error) {
        res.status(400).json({ message: "data incrupt please check formate", error })
    }
}

const updateTestimonials = async (req, res) => {
    try {
        const data = testimonialHelper(req);
        const testimonial_ID = req.params.id;
        const result = await ServiceSchema.findByIdAndUpdate(testimonial_ID, data, {
            new: true,
        });
        res.status(200).json({ message: "testimonial successfully Update of testimonial id", result });
    } catch (error) {
        res.status(400).json({ message: "internal error" });
    }
}

const deleteTestimonials = async (req, res) => {
    try {
        const S_ID = req.params.id;
        const result = await TestimonialSchema.deleteOne({_id: S_ID})
        if(result.deletedCount === 0){
            res.status(404).json({message: 'testimonial not found'})
        }
        res.status(200).json({ message: "testimonial delete succesfully"})
    } catch (error) {
        res.status(400).json({message: 'internal error for delete testimonial'})
    }
}

module.exports = {getTestimonials, postTestimonials, updateTestimonials, deleteTestimonials};