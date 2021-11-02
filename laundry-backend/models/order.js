const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    order_Id:{
        type:Number,
        required:true
    },
    order_Date&Time:{
        type:Date(),timestamps:true,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})
mongoose.model("Order",orderSchema)
