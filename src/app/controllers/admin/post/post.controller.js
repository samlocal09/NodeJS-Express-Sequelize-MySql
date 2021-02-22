var postService = require('../../../services/post.service');
var { errorResponse, successResponse } = require('../../../helpers/response');

exports.create = async (req, res) => {
	var post = await postService.create(req);
	return successResponse(req, res, { post });
};

// Find post by id
exports.findById = async (req, res) => {
	var post = await postService.findById(req);
	return successResponse(req, res, { post });		
};

// Get all post
exports.getAll = async (req, res) => {
    var post = await postService.getAll();
    return successResponse(req, res, { post });		
};

// Update a Post
exports.update = async (req, res) => {
	var post = await postService.update(req);
	return successResponse(req, res, { post });
};
 
// Delete a post by Id
exports.delete = async (req, res) => {
	var result = await postService.delete(req);
	return successResponse(req, res, null);
};
 