const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireLogin = require('../middleware/requireLogin');
const Order =  mongoose.model("Order")

// Update Order Status
router.post('/updateOrder', requireLogin,(req, res) => {
    const ap = req.body;
    Order.updateOne(
        { _id: ObjectId(ap.id) },
        {
            $set: { status: ap.status, progress: ap.progress }
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

// Update Order details
router.post('/updateOrderDetails',requireLogin, (req, res) => {
    const od = req.body;
    Order.updateOne(
        { _id: ObjectId(od.id) },
        {
            $set: { shipment: od.shipment, products: od.products, price: od.price }
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

// Added Place Order
router.post('/addOrders', requireLogin,(req, res) => {
    const newOrder = req.body;
    Order.insertOne(newOrder).then((result) => {
        res.send(result.insertedCount > 0);
    });
    // console.log(newOrder);
});

// Get specific user Orders
router.get('/orders', requireLogin,(req, res) => {
    // console.log(req.query.email);
    Order.find({ email: req.query.email }).toArray((err, documents) => {
        res.send(documents);
    });
});

// Get all Orders
router.get('/allOrders',requireLogin, (req, res) => {
    Order.find({}).toArray((err, documents) => {
        res.send(documents);
    });
});




module.exports = router;