var PostService = require('../../../services/post.service');
var responseHelper = require('../../../helpers/response');

exports.create = async (req, res) => {
	var post = await PostService.create(req);
	return responseHelper.successResponse(req, res, { post });
};

// Find a Customer by Id
exports.findById = async (req, res) => {
	var post = await PostService.findById(req);
	return responseHelper.successResponse(req, res, { post });		
};

// Update a Post
exports.update = async (req, res) => {
	var post = await PostService.update(req);
	return responseHelper.successResponse(req, res, { post });
};
 
// Delete a Customer by Id
exports.delete = async (req, res) => {
	var result = await PostService.delete(req);
	return responseHelper.successResponse(req, res, null);
};
 