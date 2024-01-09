const mongoose = require("mongoose")

const HomeBannerSchema = new mongoose.Schema({

    
    imgurl: {
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
    shortdesc: {
        type: String,
        required: true,
    }
})

const HomeBanner = mongoose.model("HomeBanner", HomeBannerSchema);

module.exports = HomeBanner;