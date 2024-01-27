const express = require('express');
const workRouter = express.Router();

const upload = require('../middleware/uploader');

const {getWork, postWork, updateWork, deleteWork} = require('../controllers/workprocess')

workRouter.route('/works').get(getWork);
workRouter.route('/works').post(upload.single('image'), postWork);
workRouter.route('/works/:id').put(updateWork);
workRouter.route('/works/:id').delete(deleteWork);


module.exports = workRouter;