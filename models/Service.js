const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema({
    home_img: {
        type: String,
        required: true,
    },
    home_icon: {
        type: String,
        required: true,
    },
    redirect_link: {
        type: String,
        required: true,
    },
    detail_img:{
        type: String,
        required: true,
    },
    heading: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
});

module.exports =  mongoose.model("service", ServiceSchema);
