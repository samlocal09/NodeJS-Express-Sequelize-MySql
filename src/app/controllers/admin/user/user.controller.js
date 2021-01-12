var UserService = require('../../../services/user.service');
var responseHelper = require('../../../helpers/response');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs'); 

exports.create = async (req, res) => {
    var user = await UserService.create(req);
    
    var token = jwt.sign({ user_id: user.user_id }, 'secretCode', {
        expiresIn: 3600 // expires in 1 hour
    })

	return responseHelper.successResponse(req, res, { auth: true, token: token });
};
 
exports.getMyProfile = async (req, res) => {
    var user = await UserService.getById(req.params.userId);
    if(!user) return responseHelper.errorResponse(req, res, 'User Not Found', 404);
    return responseHelper.successResponse(req, res, { user });
}

exports.login = async (req, res) => {
    var user = await UserService.getUserByEmail(req.body.user_email);
    if(!user) return responseHelper.errorResponse(req, res, 'User Not Found', 404);

    var isValidPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!isValidPassword) return responseHelper.errorResponse(req, res, 'Username or password is not correct', 401);
    
    var token = jwt.sign({ user_id: user.user_id }, 'secretCode', {
      expiresIn: 3600 // expires in 1 hour
    });
    
    return responseHelper.successResponse(req, res, { auth: true, token: token });
}