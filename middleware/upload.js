const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');

mongoose.connect('mongodb+srv://manishfrontenddeveloper:HelloManish2025@cluster12.keyzrxr.mongodb.net/Cluster12?retryWrites=true&w=majority');


const storage = new GridFsStorage({
    url: "mongodb+srv://manishfrontenddeveloper:HelloManish2025@cluster12.keyzrxr.mongodb.net/Cluster12?retryWrites=true&w=majority",
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
              if (err) {
                return reject(err);
              }
              const filename = buf.toString('hex') + file.originalname;
              const fileInfo = {
                filename: filename,
                bucketName: 'uploads', // replace 'uploads' with your GridFS bucket name
              };
              resolve(fileInfo);
            });
          });
    },
});

// const mult = multer({ storage });

module.exports = multer({ storage });