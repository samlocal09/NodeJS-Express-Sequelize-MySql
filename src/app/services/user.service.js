const _ROOT_CONF = require('../config/rootConfig');
const User = _ROOT_CONF.db.user;
var bcrypt = require('bcryptjs'); 

exports.create = function(req){
    var hasedPassword = bcrypt.hashSync(req.body.password, 8);

    return User.create({
        username: req.body.username,
        user_email: req.body.user_email,
        password: hasedPassword
    });
};