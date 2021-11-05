const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  itemId: {
    type:Number,
    required: true,
  },
  itemName: {
    type:String,
    enum: ["shirt","tshirt","trousers","jeans","boxers","joggers"],
  },
  itemQuantity: {
    type:Number,
    required: true,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,ref:"order",
  }  
});
mongoose.model("Product",productSchema)

