const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  totalItems: {
    type:Number,
    required: true,
  },
  totalPrice: {
    type:Number,
    required: true,
  },
  orderitems: [
    {
      name:{String},
      quantity:{Number},
      price:{Number},
      washtype:{String},
      item:{type:mongoose.Schema.Types.ObjectId,ref:"item"}
   }
  ],
  storedetails: [
    {
      name :{String},
      address:{String},
      city:{String},
      phone:{Number},
      store : {type:mongoose.Schema.Types.ObjectId,ref:"store"},
    }
  ],
  user:{type: mongoose.Schema.Types.ObjectId, ref:"user"},
  address : {type:String},
  cancellation: {type:Boolean, default:false},
  status: {
    type:String,
    enum: [ "pending", "pickedUp", "inProgress", "readyToDeliver", "delivered", "cancelled" ],
    Default:"pending"
  }  
},{  timestamps:true,
  // { currentTime: () => Math.floor(Date.now() / 1000) }
}
);
mongoose.model("Order",orderSchema)