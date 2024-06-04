const Post=require('../models/post');


exports.createPost = async (req,res)=>{
    try{
    const post=new Post(req.body);
    const savedPost=await post.save();
    res.status(200).json({
        post:savedPost,
    });
    }catch(err){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
    
}

exports.getPost = async (req,res)=>{
    try{
    const result=await Post.find().populate('comments').populate('likes').exec();
    res.status(200).json({
        post:result,
    });
    }catch(err){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
    
}