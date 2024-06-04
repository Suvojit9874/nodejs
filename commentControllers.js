const Comment=require('../models/comments');
const Post=require('../models/post');

//business logic

exports.createComment=async(req,res)=>{
    try{
        //fetch data from req.body
        const {post,user,body}=req.body;
        const comment=new Comment({post,user,body});
        //save the new comment into db
        const savedComment=await comment.save();
        //find the post by ID, add the new comment in the array
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true}).populate("comments").exec(); //populate the comments array with comment document

        res.status(200).json({
            post:updatedPost,
        });

    }catch(err){
        console.log(err.message);
        return  res.status(500).json({
            error:"Error while creating comment"
        });
    }
}