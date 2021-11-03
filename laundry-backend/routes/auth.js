const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const validator = require('validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')




router.get('/', (req,res) => {
    res.send("Hello")
})


router.get('/protected', requireLogin,(req,res) => {
    res.send("hello user")
})

router.post('/register', (req,res) => {
    //console.log(req.body.name)
    const {name,email,password,phone,address,district,pincode,state} = req.body
    if(!email || ! password || !name || !phone || !address ||!district || !pincode || !state) {
        res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser) => {
        if(savedUser) {
            return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword => {
            const user = new User({
                email,
                password:hashedpassword,
                name,
                phone,
                address,
                district,
                state,
                pincode
            })
    
            user.save()
            .then(user => {
                res.json({message:"saved succesfully"})
            })
            .catch(err => {
                console.log(err)
            
            })
        })
        
    })
    .catch(err => {
        console.log(err)
    })

})

router.post('/signin' ,(req,res) => {
    const {email,password} = req.body
    if (!email || !password){
        return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch =>{
            if(doMatch){
                //res.json({message:"sucessfully signed in"})
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
                res.json({token})
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err => {
            console.log(err)
        })
    })
})



module.exports = router