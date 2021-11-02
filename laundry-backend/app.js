const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')


require('./models/user')
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI , {
    useNewUrlParser:true,
    useUnifiedTopology:true
})




mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahhoo")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})


// require('./models/user')
// //mongoose.model("User")
// //require('./models/order')
// //require('./models/item')
// //require('./models/store')
// app.use(express.json())
// app.use(require('./routes/auth'))
// app.use(require('./routes/order'))

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})



app.use(express.json())

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

