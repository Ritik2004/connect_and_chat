const User = require("../Models/User")
const router = require("express").Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = "ritikgaur"


router.post("/create/user", 
body('email').isEmail(),
body('password').isLength({min:6}),
body('username').isLength({min:5}),
body('phonenumber').isLength({min:10}),
async (req,res) => {
     const error = validationResult(req);
     if(!error.isEmpty()){
        return res.status(400).json("some error occoured")
     }
     try{
         //check if user exist
         let user = await User.findOne({email:req.body.email});
         if(user){
            return res.status(200).json("user exist")
         }
         const salt = await bcrypt.genSalt(10);
         const hashPass = await bcrypt.hash(req.body.password,salt);
         user = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:hashPass,
            profile:req.body.profile,
            phonenumber:req.body.phonenumber
         })
         const accessToken = jwt.sign({
            id:user._id,
            username:user.username
         },secret);


         await user.save();
         res.status(200).json({user, accessToken});
     }
     catch(error){
          return res.status(500).json("Internal error")
     }
});

//Login

router.post("/login", 
body('email').isEmail(),
body('password').isLength({min:6}),

async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
       return res.status(400).json("some error occoured")
    }
    try{
        //.select will select the specific field we want to see 
        //by putting plus we are telling only add this to our query
         const user = await User.findOne({email:req.body.email}).select("+password");
             if(!user){
                return res.status(400).json("user does not exist")
             } 
           const comparePass = await bcrypt.compare(req.body.password,user.password);

           if(!comparePass){
            return req.status(400).json("Password error")
           }
           const accessToken = jwt.sign({
            id:user._id,
            username:user.username
         },secret);
         res.status(200).json({user, accessToken});
        }
    catch(error){
        return res.status(500).json("Internal error")
    }
})

module.exports = router; 
