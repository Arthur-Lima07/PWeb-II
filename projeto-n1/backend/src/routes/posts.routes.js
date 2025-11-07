const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');


router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/', postsController.createPost);


module.exports = router;