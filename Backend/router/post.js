const Post = require("../Models/Post")
const router = require("express").Router();
const {verifyToken} = require('./verifyToken')

//create Post

router.post("/user/post", verifyToken, async(req,res)=>{
      try{
           let{title,image,videos} = req.body;
           let newPost = new Post({
            title,image,videos,user:req.user.id
           })
           const post = await newPost.save()
           res.status(200).json(post)
     }
      catch(error){
         return res.status(500).json("Internal error occured")
     }
})

//upload post by one user
router.get("/get/post/:id", async(req,res)=>{
   try{
            const mypost = await Post.findOne({user:req.user.id})
            if(!mypost){
                res.status(400).json("you have no post")
            }
            res.status(200).json(mypost)
   }
    catch(error){
         res.status(500).json("Internal error occured")
    }
})

//update user post
router.put("/update/post/:id", verifyToken, async(req,res)=>{

 // try{
    let post = await Post.findById(req.params.id);
      if(!post){
        return res.status(400).json("Post does not found")
      };

      post = await Post.findByIdAndUpdate(req.params.id , {
        $set:req.body
       })
       let updatepost = await post.save();
        res.status(200).json(updatepost);
//   }
//   catch(err){
//     return res.status(500).json("Internal error occured") 
//   }

})

module.exports = router; 
