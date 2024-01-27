const mongoose = require('mongoose')

const TestimonialSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    profesion:{
        type: String,
        require: true,
    },
    comment: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('testimonial', TestimonialSchema);