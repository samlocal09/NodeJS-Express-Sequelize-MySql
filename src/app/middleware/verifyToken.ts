import { errorResponse } from './../helpers/response';
import * as jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    var token = req.headers['x-access-token'];
    if(!token) return errorResponse(req, res, 'No token provided', 401);

    jwt.verify(token, 'secretCode', async function(err, decoded) {
        if (err) return errorResponse(req, res, 'Failed to authenticate token', 500);        
        next();
    });
};
