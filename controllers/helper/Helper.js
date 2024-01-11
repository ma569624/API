

const BannerHelper = (req) => {
    const imgurl = `http://localhost:5000/profile/${req.file.filename}`;
    const subheading = req.body.subheading;
    const heading = req.body.heading;
    const shortdesc = req.body.shortdesc;

    return { imgurl, subheading, heading, shortdesc } ;
}
const FeaturHelper = (req) => {
    const imgurl = `http://localhost:5000/profile/${req.file.filename}`;
    const heading = req.body.heading;
    const shortdesc = req.body.shortdesc;

    return { imgurl, heading, shortdesc };
}

module.exports =  {BannerHelper, FeaturHelper};
