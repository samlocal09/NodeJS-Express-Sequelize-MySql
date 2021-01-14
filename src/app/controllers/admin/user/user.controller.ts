// import { ResponseHelper } from './../../../helpers/response';
// import { UserService } from './../../../services/user.service';

// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

// export default class UserController{
//     constructor(
//         private userService: UserService,
//         private responseHelper: ResponseHelper,
//     ){}

//     async create(req, res) {
//         var user = await this.userService.create(req);
        
//         var token = jwt.sign({ user_id: user.user_id }, 'secretCode', {
//             expiresIn: 3600 // expires in 1 hour
//         })
    
//         return this.responseHelper.successResponse(req, res, { auth: true, token: token });
//     };
     
//     async getMyProfile(req, res){
//         var user = await this.userService.getById(req.params.userId);
//         if(!user) return this.responseHelper.errorResponse(req, res, 'User Not Found', 404);
//         return this.responseHelper.successResponse(req, res, { user });
//     }
    
//     async login (req, res) {
//         var user = await this.userService.getUserByEmail(req.body.user_email);
//         if(!user) return this.responseHelper.errorResponse(req, res, 'User Not Found', 404);
    
//         var isValidPassword = bcrypt.compareSync(req.body.password, user.password);
//         if (!isValidPassword) return this.responseHelper.errorResponse(req, res, 'Username or password is not correct', 401);
        
//         var token = jwt.sign({ user_id: user.user_id }, 'secretCode', {
//           expiresIn: 3600 // expires in 1 hour
//         });
        
//         return this.responseHelper.successResponse(req, res, { auth: true, token: token });
//     }
// }