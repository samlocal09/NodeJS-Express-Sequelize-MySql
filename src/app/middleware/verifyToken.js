var responseHelper = require('../helpers/response');

var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    var token = req.headers['x-access-token'];
    if(!token) return responseHelper.errorResponse(req, res, 'No token provided', 401);

    jwt.verify(token, 'secretCode', async function(err, decoded) {
        if (err) return responseHelper.errorResponse(req, res, 'Failed to authenticate token', 500);        
        next();
    });
};