const User = require("../Models/User")
const router = require("express").Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = "ritikgaur"
const { verifyToken } = require("./verifyToken");

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
  const user = await User.findOne({email:req.body.email});
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
         const{password, ...other} = user._doc
         res.status(200).json({other, accessToken});
        }
    catch(error){
        return res.status(500).json("Internal error")
    }
})

//following
router.put("/following/:id" , verifyToken , async(req , res)=>{
   if(req.params.id !== req.body.user){
       const user = await User.findById(req.params.id);
       const otheruser = await User.findById(req.body.user);

       if(!user.Followers.includes(req.body.user)){
           await user.updateOne({$push:{Followers:req.body.user}});
           await otheruser.updateOne({$push:{Following:req.params.id}});
           return res.status(200).json("User has followed");
       }else{
           await user.updateOne({$pull:{Followers:req.body.user}});
           await otheruser.updateOne({$pull:{Following:req.params.id}});
           return res.status(200).json("User has Unfollowed");
       }
   }else{
       return res.status(400).json("You can't follow yourself")
   }
})

router.put("/following/:id" , verifyToken , async(req , res)=>{
   if(req.params.id !== req.body.user){
       const user = await User.findById(req.params.id);
       const otheruser = await User.findById(req.body.user);

       if(!user.Followers.includes(req.body.user)){
           await user.updateOne({$push:{Followers:req.body.user}});
           await otheruser.updateOne({$push:{Following:req.params.id}});
           return res.status(200).json("User has followed");
       }else{
          
           return res.status(400).json("you already follow");
       }
   }else{
       return res.status(400).json("You can't follow yourself")
   }
})

module.exports = router; 
