const express = require('express');
const router = express.Router();

const {postHomeBanner , getHomeBanner, EditHomeBanner, DeleteHomeBanner} = require('../controllers/home');
const {getFeature, postFeature, updateFeature, deleteFeature } = require('../controllers/feature')

const upload = require("../middleware/uploader");


router.route('/banner').get(getHomeBanner);
router.route('/banner').post(upload.single('file'), postHomeBanner);
router.route('/banner/:id').put(upload.single('file'), EditHomeBanner);
router.route('/banner/:id').delete(DeleteHomeBanner);


router.route('/feature').get(getFeature);
router.route('/feature').post(upload.single('image'), postFeature);
router.route('/feature/:id').put(upload.single('image'), updateFeature);
router.route('/feature/:id').delete(deleteFeature);

module.exports = router;