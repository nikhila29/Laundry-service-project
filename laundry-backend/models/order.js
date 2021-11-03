const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    order_Id:{
        type:Number,
        required:true
    },
    order_DateTime:{
        type:Date(),timestamps:true,
        required:true
    },
    total_items:{
        type:Number,
        required:true
    },
    total_price:{
        type:Number,
        required:true
    },
    status:{
        type:String,Enum:[Pending,PickedUp,InProgress,ReadyToDeliver,Delivered,Cancelled],default:"pending",
        required:true
    },
    store:{
        type:mongoose.Schema.type.ObjectId,ref:"Store_Schema",
        required:true
    },
    user:{
        type:mongoose.Schema.type.ObjectId,ref:"User_Schema",
        required:true
    },
    address:{
        type:String,
        required:true
    },
    cancellation:{
        type:Boolean
    }
})
mongoose.model("Order",orderSchema)
