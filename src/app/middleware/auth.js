var { errorResponse } = require('../helpers/response');

var jwt = require('jsonwebtoken');

module.exports = auth;

function auth(roles = []) {
    return (req, res, next) => {
        var token = req.headers['x-access-token'];
        if(!token) return errorResponse(req, res, 'No token provided', 401);

        jwt.verify(token, 'secretCode', async function(err, decoded) {
            //Validate valid token
            if (err) return errorResponse(req, res, 'Failed to authenticate token', 500);   
            
            //Validate user's authorization
            let currentUserRole = decoded.user_role;

            if(roles.length && !roles.includes(currentUserRole)) {
                return errorResponse(req, res, 'Unauthorized', 401);
            } 

            next();
        });
    }
}