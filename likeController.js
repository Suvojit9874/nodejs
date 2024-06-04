
const Like=require('../models/like');
const Post=require('../models/post');

exports.giveLike=async(req,res)=>{
    try {
        const {post,user}=req.body;
        const like=new Like({post,user});
        const savedLike=await like.save();
        const updatedPost= await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate('likes').exec();
        res.json({
            result:updatedPost,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}
exports.unlikePost=async(req,res)=>{
    try {
       const {post,like}=req.body;
        const deletedLike=await Like.findOneAndDelete({post:post,_id:like})
        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._like}},{new:true});
        res.json({
            result:updatedPost,
        })        

    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}