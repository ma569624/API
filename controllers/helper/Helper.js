const host = process.env.HOST;
const port = process.env.PORT;
const path = require("path");

const BannerHelper = (req) => {
    // const banner = req.file.path;
    const banner = `http://localhost:5000/image/${req.file.filename}`;
    const subheading = req.body.subheading;
    const heading = req.body.heading;
    const shortdesc = req.body.shortdesc;
    return { banner, subheading, heading, shortdesc };
}
const FeaturHelper = (req) => {
    const imgurl = `https://api-production-cb70.up.railway.app/image/${req.file.filename}`;
    const heading = req.body.heading;
    const shortdesc = req.body.shortdesc;

    return { imgurl, heading, shortdesc };
}
const ServiceHelper = (req) => {
    // let home_img = null;
    if (req.files && req.files.length > 0) {
        var home_img = `https://api-production-cb70.up.railway.app/image/${req.files[0].filename}`;
        var detail_img = `https://api-production-cb70.up.railway.app/image/${req.files[1].filename}`;
    } 

    const home_icon = req.body.home_icon;
    const redirect_link = req.body.redirect_link;
    const heading = req.body.heading;
    const short = req.body.short;
    const desc = req.body.desc;

    return { home_img, home_icon, redirect_link, desc, detail_img, heading, short };
}
const AboutHelper = (req) => {
    const Image = `https://api-production-cb70.up.railway.app/image/${req.file.filename}`;
    const subheading = req.body.subheading;
   const heading = req.body.heading;
   const desc = req.body.desc;

   return { Image, subheading, heading, desc };
    
}
const testimonialHelper = (req) => {
    const image = `https://api-production-cb70.up.railway.app/image/${req.file.filename}`;
    const name = req.body.name;
    const comment = req.body.comment;
    const profesion = req.body.profesion;

    return { image, name, comment, profesion };
}
const workHelper = (req) => {
    // const image = `https://api-production-cb70.up.railway.app/image/${req.file.filename}`;
    const heading = req.body.heading;
    const count = req.body.count;
    const desc = req.body.desc;

    return { count, heading, desc };
}

module.exports = { BannerHelper, FeaturHelper, ServiceHelper, AboutHelper, testimonialHelper, workHelper };
