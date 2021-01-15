import { errorResponse, successResponse } from './../../../helpers/response';
import userService from './../../../services/user.service';

import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

const userController = {
    async create(req, res) {
        var user = await userService.create(req);
        
        var token = jwt.sign({ user_id: user.user_id }, 'secretCode', {
            expiresIn: 3600 // expires in 1 hour
        })
    
        return successResponse(req, res, { auth: true, token: token });
    },
     
    async getMyProfile(req, res){
        var user = await userService.getById(req.params.userId);
        if(!user) return errorResponse(req, res, 'User Not Found', 404);
        return successResponse(req, res, { user });
    },
    
    async login (req, res) {
        var user = await userService.getUserByEmail(req.body.user_email);
        if(!user) return errorResponse(req, res, 'User Not Found', 404);
    
        var isValidPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!isValidPassword) return errorResponse(req, res, 'Username or password is not correct', 401);
        
        var token = jwt.sign({ user_id: user.user_id }, 'secretCode', {
          expiresIn: 3600 // expires in 1 hour
        });
        
        return successResponse(req, res, { auth: true, token: token });
    }
}

export default userController;