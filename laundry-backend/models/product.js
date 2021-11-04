const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const productSchema = new mongoose.Schema({
    product_type:{
        type:String,
        Enum:[Shirt,T-shirt,Trousers,Jeans,Boxers,Joggers],
        required:true
    },
    product_quantity:{
        type:Number,
        default:"0",
        required:true
    },
    wash_type:{
        type:String,
        Enum:[
            {RegularWash,Price:20},
            {Iron,Price:15},
            {Dryclean,Price:25},
            {Pack,Price:10}],
        required:true
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order_Schema"
    }
   
})
mongoose.model("Product",productSchema)
