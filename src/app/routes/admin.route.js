var express = require('express');
var requestHandler = require('../middleware/requestHandler');
var asyncHandler = require('../middleware/asyncHandler');
var auth = require('../middleware/auth');
var joiValidator = require('../middleware/joiValidator');
const postController = require('../controllers/admin/post/post.controller');
const userController = require('../controllers/admin/user/user.controller');
var postValidator = require('../controllers/admin/post/post.validator');
const USER_ROLE = require('../utils/constant').USER_ROLE;

const router = express.Router();

// ========================================
// Post
// ========================================
router.get('/posts', auth([USER_ROLE.ADMIN]), asyncHandler(async (req, res, next) => { await postController.getAll(req, res); }));
router.post('/posts', auth([USER_ROLE.ADMIN]), joiValidator(postValidator.createPostSchema), asyncHandler(async (req, res, next) => { await postController.create(req, res);}));
router.get('/posts/:postId', asyncHandler(async (req, res, next) => { await postController.findById(req, res); }));
router.put('/posts/:postId', auth(), asyncHandler(async (req, res, next) => { await postController.update(req, res); }));
router.delete('/posts/:postId', auth(), asyncHandler(async (req, res, next) => { await postController.delete(req, res); }));

// ========================================
// User
// ========================================
router.post('/users/login', asyncHandler(async (req, res, next) => { await userController.login(req, res); }));
router.post('/users', asyncHandler(async (req, res, next) => { await userController.create(req, res); }));
router.get('/users/:userId', auth([USER_ROLE.ADMIN]), asyncHandler(async (req, res, next) => { await userController.getMyProfile(req, res); }));

module.exports = router;