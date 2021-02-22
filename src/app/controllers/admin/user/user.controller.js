var userService = require('../../../services/user.service');
var { successResponse, errorResponse } = require('../../../helpers/response');
const USER_ROLE = require('../../../utils/constant').USER_ROLE;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs'); 

exports.create = async (req, res) => {
    var user = await userService.create(req);
    
	return successResponse(req, res );
};
 
exports.getMyProfile = async (req, res) => {
    var user = await userService.getById(req.params.userId);
    if(!user) return errorResponse(req, res, 'User Not Found', 404);
    return successResponse(req, res, { user });
}

exports.login = async (req, res) => {
    var user = await userService.getUserByEmail(req.body.user_email);
    if(!user) return errorResponse(req, res, 'User Not Found', 404);

    var isValidPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!isValidPassword) return errorResponse(req, res, 'Username or password is not correct', 401);
    
    //Default role set for user
    let userRole = USER_ROLE.ADMIN;

    var token = jwt.sign({ 
        user_id: user.user_id,
        user_role: userRole
    }, 'secretCode', {
      expiresIn: 3600 // expires in 1 hour
    });
    
    return successResponse(req, res, { auth: true, token: token });
}