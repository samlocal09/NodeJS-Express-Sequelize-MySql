var express = require('express');
const router = express.Router();
var requestHandler = require('../middleware/requestHandler');

const postController = require('../controllers/admin/post/post.controller');

var joiValidator = require('../middleware/joiValidator');
var postValidator = require('../controllers/admin/post/post.validator');

// ========================================
// Post
// ========================================
// Create a new Post
router.post('/posts', 
    joiValidator(postValidator.createPostSchema),
    requestHandler(async (req, res, next) => {
        await postController.create(req, res)
    })
);

// Get a single Customer by Id
router.get('/posts/:postId', requestHandler(async (req, res, next) => {
    await postController.findById(req, res);
}));

// Update a Post with Id
router.put('/posts/:postId', requestHandler(async (req, res, next) => {
    await postController.update(req, res);
}));

// Delete a Customer with Id
router.delete('/posts/:postId', requestHandler(async (req, res, next) => {
    await postController.delete(req, res);
}));

module.exports = router;