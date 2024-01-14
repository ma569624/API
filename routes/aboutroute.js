const express = require('express');
const aboutroute = express.Router();

const {getAbout, postAbout, putAbout, deleteAbout} = require('../controllers/about');
const upload = require('../middleware/uploader');

aboutroute.route('/about').get(getAbout);
aboutroute.route('/about').post(upload.single('image'), postAbout);
aboutroute.route('/about/:id').put(upload.single('image'), putAbout);
aboutroute.route('/about/:id').delete(deleteAbout);

module.exports = aboutroute;