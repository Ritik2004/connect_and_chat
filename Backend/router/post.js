const Post = require("../Models/Post")
const router = require("express").Router();
const {verifyToken} = require('./verifyToken')

//create Post

router.post("/user/post", verifyToken, async(req,res)=>{
      try{
           let{title,image,video} = req.body;
           let newPost = new Post({
            title,image,video,user:req.user.id
           })
           const post = await newPost.save()
           res.status(200).json(post)
     }
     catch(error){
        return res.status(500).json("Internal error occured")
     }
})

//upload post by one user
router.get("/get/post", verifyToken, async(req,res)=>{
   try{
            const mypost = await Post.findOne({user:req.user.id})
            if(!mypost){
                res.status(400).json("you have no post")
            }
            res.status(200).json(mypost)
   }
    catch(error){
        return res.status(500).json("Internal error occured")
    }
})

module.exports = router; 
