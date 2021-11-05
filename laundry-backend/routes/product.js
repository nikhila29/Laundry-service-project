const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const requireLogin = require('../middleware/requireLogin')
const Product =  mongoose.model("Product")


// Update Product Information
router.post('/updateProduct', requireLogin,(req, res) => {
    const pd = req.body;
    Product.updateOne(
        { _id: ObjectId(pd.id) },
        {
            $set: { name: pd.name, price: pd.price }
        },
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: err });
            } else {
                res.send(result.modifiedCount > 0);
                console.log(result);
            }
        }
    );
});

// Get all products
router.get('/products', requireLogin,(req, res) => {
    Product.find({}).toArray((err, documents) => {
        res.send(documents);
    });
});

// Add Products in inventory
router.post('/addProducts',(req, res) => {
    const allProduct = req.body;
    Product.insertOne(allProduct).then((result) => {
        console.log(result.insertedCount);
        res.send(result.insertedCount > 0);
    });
});

// Delete Product
router.delete('/deleteProducts/:id', requireLogin,(req, res) => {
    console.log(req.params.id);

    Product.deleteOne({ _id: ObjectId(req.params.id) }).then((result) => {
        res.send(result.deletedCount > 0);
    });
});





module.exports = router

