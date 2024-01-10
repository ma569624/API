const express = require('express');
const homerouter = express.Router();

const {postHomeBanner , getHomeBanner, EditHomeBanner, DeleteHomeBanner} = require('../controllers/home');
const multer = require("multer");
const path = require("path");

// storage engine 

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 100000
    }
})


homerouter.route('/banner').post( upload.single('profile'), postHomeBanner);
homerouter.route('/banner').get(getHomeBanner);
homerouter.route('/banner/:id').put( upload.single('profile'), EditHomeBanner);
homerouter.route('/banner/:id').delete(DeleteHomeBanner);

module.exports = homerouter;
