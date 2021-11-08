// const express = require('express')
// const router = express.Router()
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const requireLogin = require('../middleware/requireLogin');
// const Order =  mongoose.model("Order")

// // Update Order Status
// router.post('/updateOrder', requireLogin,(req, res) => {
//     const ap = req.body;
//     Order.updateOne(
//         { _id: ObjectId(ap.id) },
//         {
//             $set: { status: ap.status, progress: ap.progress }
//         },
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send({ message: err });
//             } else {
//                 res.send(result.modifiedCount > 0);
//                 console.log(result);
//             }
//         }
//     );
// });

// // Update Order details
// router.post('/updateOrderDetails',requireLogin, (req, res) => {
//     const od = req.body;
//     Order.updateOne(
//         { _id: ObjectId(od.id) },
//         {
//             $set: { shipment: od.shipment, products: od.products, price: od.price }
//         },
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send({ message: err });
//             } else {
//                 res.send(result.modifiedCount > 0);
//                 console.log(result);
//             }
//         }
//     );
// });

// // Added Place Order
// router.post('/addOrders',(req, res) => {
//     const newOrder = req.body;
//     Order.create({

//     }).then((result) => {
//         res.send(result.insertedCount > 0);
//     });
//      console.log(newOrder);
// });

// // Get specific user Orders
// router.get('/orders', requireLogin,(req, res) => {
//     // console.log(req.query.email);
//     Order.find({ email: req.query.email }).toArray((err, documents) => {
//         res.send(documents);
//     });
// });

// // Get all Orders
// router.get('/allOrders',requireLogin, (req, res) => {
//     Order.find({}).toArray((err, documents) => {
//         res.send(documents);
//     });
// });




// module.exports = router;

const express = require("express");
const Order = require("../models/order");
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const router = express.Router();

router.get("/orders", requireLogin, async function (req, res) {
  try {
    const orders = await Order.find({ user_id: req.user });
    return res.json({
      message: "success",
      data: {
        orders,
      },
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

router.post("/", requireLogin, async function (req, res) {
  const number = await Order.countDocuments();
  console.log("Variable -->", number);
  let order_num = "LUSORD0" + (number + 1);

  const { Wash, Press, Fold, Pack } = {
    Wash: 20,
    Press: 15,
    Fold: 10,
    Pack: 25,
  };
  const Details = req.body.details;
  let Price = 0;
  let Quantity = 0;

  Details.forEach((detail) => {
    let total = 0;
    if (detail.wash) {
      total += detail.quantity * Wash;
    }
    if (detail.press) {
      total += detail.quantity * Press;
    }
    if (detail.fold) {
      total += detail.quantity * Fold;
    }
    if (detail.pack) {
      total += detail.quantity * Pack;
    }
    detail["price"] = total;
    Price += total;
    Quantity += parseInt(detail.quantity);
  });

  const { address, status } = req.body;
  const order = await Order.create({
    order_id: order_num,
    details: Details,
    total_quantity: Quantity,
    user_id: mongoose.Types.ObjectId(req.user[0]._id),
    total_quantity: Quantity,
    total_price: Price,
    address,
    status,
  });
  console.log("order.user-->", order.user, "req.user-->", req.user);

  res.json({
    status: "success",
    data: {
      order,
    },
  });
});

router.delete("/:id", requireLogin, async function (req, res) {
  const post = await Order.findOne({ _id: req.params.id });
  if (!post) {
    return res.status(404).json({
      status: "failed",
      message: "Post Not Found",
    });
  }

  await Order.deleteOne({ _id: req.params.id });

  res.json({
    status: "success",
  });
});

router.get("/:id", requireLogin, async function (req, res) {
  try {
    const order = await Order.findOne({
      _id: mongoose.Types.ObjectId(req.params.id),
      user_id: req.user,
    });
    return res.json({
      status: "success",
      data: order,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

router.put("/:id", requireLogin, async function (req, res) {
  try {
    const order = await Order.findOneAndUpdate(
      {
        _id: mongoose.Types.ObjectId(req.params.id),
        user_id: req.user,
      },
      { $set: { status: "Cancelled" } },
      { new: true }
    );
    return res.json({
      status: "success",
      data: order,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = router;