const multer = require("multer");
const path = require("path");
const express =  require('express');
const app = express();
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
        fileSize: 10000
    }
})

app.use(upload.single('profile'));

const imgUpload = async (req, res ) => {
    res.json({
        success: 1,
        profile_url: `http://localhost:5000/profile/${req.file.filename}`
    })
};


function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.json({
            success: 0,
            message: err.message
        })
    }
}

app.use(errHandler);
module.exports = imgUpload;