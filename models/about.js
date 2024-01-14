const mongoose = require('mongoose')

const AboutSchema = new mongoose.Schema({
    Image: {
        type: String,
        required: true,
    },
    subheading: {
        type: String,
        required: true,
    },
    heading: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('about', AboutSchema);