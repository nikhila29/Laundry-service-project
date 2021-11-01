const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const PORT = 5000


mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahhoo")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

app.use(express.json())

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})