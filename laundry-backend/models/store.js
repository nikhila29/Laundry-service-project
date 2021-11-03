const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    store_Id:{
        type:Number,
        required:true
    },
    store_name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },

})
mongoose.model("Store",storeSchema)
