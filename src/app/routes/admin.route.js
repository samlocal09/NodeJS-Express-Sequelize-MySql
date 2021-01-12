var express = require('express');
const router = express.Router();
var requestHandler = require('../middleware/requestHandler');

const postController = require('../controllers/admin/post/post.controller');
const userController = require('../controllers/admin/user/user.controller');

var joiValidator = require('../middleware/joiValidator');
var postValidator = require('../controllers/admin/post/post.validator');
var verifyToken = require('../middleware/verifyToken');

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

// ========================================
// User
// ========================================

// Login
router.post('/users/login', 
    requestHandler(async (req, res, next) => {
        await userController.login(req, res);
    })
);

// Create a new User
router.post('/users', 
    requestHandler(async (req, res, next) => {
        await userController.create(req, res)
    })
);

// Get My Profile
router.get('/users/:userId', 
    verifyToken,
    requestHandler(async (req, res, next) => {
        await userController.getMyProfile(req, res);
    })
);

module.exports = router;