import * as express from 'express';

import { requestHandler } from './../middleware/requestHandler';

//import UserController from './../controllers/admin/user/user.controller';
import postController  from './../controllers/admin/post/post.controller';

import { verifyToken } from './../middleware/verifyToken';
import { JoiValidator }  from './../middleware/joiValidator';
import { CreatePostSchema } from '../controllers/admin/post/post.validator';

const router = express.Router();
// ========================================
// Post
// ========================================
// Create a new Post
router.post('/posts', 
    JoiValidator(CreatePostSchema),
    ((req, res) => postController.create(req, res))
    // requestHandler(async (req, res, next) => {
    //     await postController.create(req, res);
    // )
);

// // Get a single Customer by Id
// router.get('/posts/:postId', requestHandler(async (req, res, next) => {
//     await postController.findById(req, res);
// }));

// // Update a Post with Id
// router.put('/posts/:postId', requestHandler(async (req, res, next) => {
//     await postController.update(req, res);
// }));

// // Delete a Customer with Id
// router.delete('/posts/:postId', requestHandler(async (req, res, next) => {
//     await postController.delete(req, res);
// }));

// // ========================================
// // User
// // ========================================

// // Login
// router.post('/users/login', 
//     requestHandler(async (req, res, next) => {
//         await userController.login(req, res);
//     })
// );

// // Create a new User
// router.post('/users', 
//     requestHandler(async (req, res, next) => {
//         await userController.create(req, res)
//     })
// );

// // Get My Profile
// router.get('/users/:userId', 
//     verifyToken,
//     requestHandler(async (req, res, next) => {
//         await userController.getMyProfile(req, res);
//     })
// );

export default router;