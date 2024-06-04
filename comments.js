const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post" //referance to the post model
    },
    user:{
        type:String,
        
    },
    body: {
        type: String,
    }

})

module.exports = mongoose.model('Comment', commentSchema);