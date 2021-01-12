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

exports.getById = function(id){
  return User.findOne({
      where: {
          user_id: id
      },
      attributes: ['user_id', 'username', 'user_email']
  })
};

exports.getUserByEmail = function(email){
    return User.findOne({
        where: {
            user_email: email
        },
        attributes: ['user_id', 'username', 'user_email', 'password']
    })
  };