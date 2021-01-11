var UserService = require('../../../services/user.service');
var responseHelper = require('../../../helpers/response');

exports.create = async (req, res) => {
	var user = await UserService.create(req);
	return responseHelper.successResponse(req, res, { user });
};
 