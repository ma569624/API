const express = require('express');
const TestimonialRouter = express.Router();

const upload = require('../middleware/uploader');
const {getTestimonials, postTestimonials, updateTestimonials, deleteTestimonials} = require('../controllers/testimonial')

TestimonialRouter.route('/testimonials').get(getTestimonials);
TestimonialRouter.route('/testimonials').post(upload.single('image'), postTestimonials);
TestimonialRouter.route('/testimonials/:id').put(upload.single('image'), updateTestimonials);
TestimonialRouter.route('/testimonials/:id').delete(deleteTestimonials);


module.exports = TestimonialRouter;