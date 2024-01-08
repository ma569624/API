const Products = require('../models/product');

const getHomeBanner = async (req, res) => {
    const mydata = await Products.find(req.query); 
    res.status(200).json({ mydata });
};

const postHomeBanner = async (req, res) => { 
    const imgurl = req.file.buffer;
    const subheading = req.body.subheading;
    const heading = req.body.heading;
    const shortdesc = req.body.shortdesc;

    res.status(200).json({ message: 'Banner created successfully' });
}


module.exports = postHomeBanner;