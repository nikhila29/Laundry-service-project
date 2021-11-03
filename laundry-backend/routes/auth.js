const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send("Hello")
})

router.post('/register', (req,res) => {
    //console.log(req.body.name)
    const {name,phone,email,password,address,district,pincode,state} = req.body
    if(!email || ! password || !name || !phone || !address ||!district || !pincode || !state) {
        res.json({error:"please add all the fields"})
    }
    res.json({message:"successfully posted"})

})

module.exports = router