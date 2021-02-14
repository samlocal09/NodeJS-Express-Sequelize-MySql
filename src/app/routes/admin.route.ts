import * as express from 'express';
import asyncHandler from './../middleware/asyncHandler';
import userController from './../controllers/admin/user/user.controller';
import postController  from './../controllers/admin/post/post.controller';
import { USER_ROLE } from './../utils/constant';
import { auth } from './../middleware/auth';
import { JoiValidator }  from './../middleware/joiValidator';
import { CreatePostSchema } from '../controllers/admin/post/post.validator';

const router = express.Router();
// ========================================
// Post
// ========================================
router.get('/posts', auth([USER_ROLE.ADMIN]), asyncHandler(async (req, res, next) => { await postController.getAll(req, res); }));
router.post('/posts', auth([USER_ROLE.ADMIN]), JoiValidator(CreatePostSchema), asyncHandler(async (req, res, next) => { await postController.create(req, res);}));
router.get('/posts/:postId', asyncHandler(async (req, res, next) => { await postController.findById(req, res); }));
router.put('/posts/:postId', auth(), asyncHandler(async (req, res, next) => { await postController.update(req, res); }));
router.delete('/posts/:postId', auth(), asyncHandler(async (req, res, next) => { await postController.delete(req, res); }));

// ========================================
// User
// ========================================
router.post('/users/login', asyncHandler(async (req, res, next) => { await userController.login(req, res); }));
router.post('/users', asyncHandler(async (req, res, next) => { await userController.create(req, res); }));
router.get('/users/:userId', auth([USER_ROLE.ADMIN]), asyncHandler(async (req, res, next) => { await userController.getMyProfile(req, res); }));

export default router;