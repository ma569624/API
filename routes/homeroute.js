const express = require('express');
const homerouter = express.Router();

const {postHomeBanner , getHomeBanner, EditHomeBanner, DeleteHomeBanner} = require('../controllers/home');
const multer = require("multer");
const path = require("path");
const upload = require("../middleware/uploader");


homerouter.route('/banner').post(upload.single('profile'), postHomeBanner);
homerouter.route('/banner').get(getHomeBanner);
homerouter.route('/banner/:id').put( upload.single('profile'), EditHomeBanner);
homerouter.route('/banner/:id').delete(DeleteHomeBanner);

module.exports = homerouter;
