const express = require('express');
const ServiceRouter = express.Router();
const upload = require('../middleware/uploader');

const {getService, postService, updateService, deleteService } = require('../controllers/service')

ServiceRouter.route('/service').get(getService)
ServiceRouter.route('/service').post(upload.array('files', 2), postService)
ServiceRouter.route('/service/:id').put(upload.array('files', 2), updateService)
ServiceRouter.route('/service/:id').delete(deleteService)


module.exports = ServiceRouter;