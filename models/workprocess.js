const mongoose = require('mongoose')

const WorkSchema = new mongoose.Schema({
    count: {
        type: Number,
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

module.exports = mongoose.model('work', WorkSchema);
