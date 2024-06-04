const express=require('express');
const { createPost, getPost } = require('../controllers/postController');
const { createComment } = require('../controllers/commentControllers');
const { giveLike, unlikePost } = require('../controllers/likeController');
const router=express.Router();

router.post('/post',createPost);
router.get('/post',getPost);
router.post("/post/comment",createComment);
router.post("/likes/like",giveLike);
router.post("/likes/dislike",unlikePost);
module.exports=router;