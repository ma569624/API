const HomeBanner = require('../models/Homebanner')
const uri = "mongodb+srv://manishfrontenddeveloper:HelloManish2025@cluster12.keyzrxr.mongodb.net/Cluster12?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');

const getHomeBanner = async (req, res) => {
    const mydata = await HomeBanner.find(req.query);
    res.status(200).json({ mydata });
};

const postHomeBanner = async (req, res) => {
    const imgurl = `http://localhost:5000/profile/${req.file.filename}`;
    const subheading = req.body.subheading;
    const heading = req.body.heading;
    const shortdesc = req.body.shortdesc;

    const client = new MongoClient(uri);
    await client.connect();

    // Access the database and collection
    const database = client.db('Cluster12');
    const collection = database.collection('homebanners');

    // Insert the document into the collection
    const data = { imgurl, subheading, heading, shortdesc }
    const result = await collection.insertOne(data);
    console.log('Inserted product with ID:', result.insertedId);
    res.status(200).json({ message: 'Banner created successfully', data });
}

const EditHomeBanner = async (req, res) => {
    // const productId = req.params.id;
    // try {
    //     // Use updateOne to update a document by its ID
    //     const result = await HomeBanner.updateOne({ _id: productId }, { $set: req.body });

    //     // Check if the product was found and updated
    //     if (result.nModified === 0) {
    //         return res.status(404).json({ error: 'Product not found' });
    //     }

    //     // Respond with a success message
    //     res.json({ message: 'Product updated successfully' });
    // } catch (error) {
    //     console.error('Error updating product:', error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }


    try {
        const imgurl = `http://localhost:5000/profile/${req.file.filename}`;
        const subheading = req.body.subheading;
        const heading = req.body.heading;
        const shortdesc = req.body.shortdesc;

        const data = { imgurl, subheading, heading, shortdesc }

        const itemId = req.params.id;
        console.log(itemId);
        // const updateData = req.body;
        console.log(req.body);
        const updatedItem = await HomeBanner.findByIdAndUpdate(itemId, data, {
          new: true, // return the modified document rather than the original
        });
    
        res.json(updatedItem);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
const DeleteHomeBanner = async (req, res) => {

}



module.exports = { getHomeBanner, postHomeBanner, EditHomeBanner, DeleteHomeBanner };
