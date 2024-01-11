const Feature = require('../models/Homebanner')

const getFeature = async (req, res) => {
    const result = await Feature.find(req.query);
    res.status(200).json({result});
};

const postFeature = async (req, res) => {

}

