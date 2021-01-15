import { _ROOT_CONF } from '../config/rootConfig';
import * as bcrypt from 'bcryptjs'; 
const User = _ROOT_CONF.db.user;

const userService = {
    create(req){
        var hasedPassword = bcrypt.hashSync(req.body.password, 8);
    
        return User.create({
            username: req.body.username,
            user_email: req.body.user_email,
            password: hasedPassword
        });
    },

    getById(id){
        return User.findOne({
            where: {
                user_id: id
            },
            attributes: ['user_id', 'username', 'user_email']
        })
      },
      
    getUserByEmail(email){
          return User.findOne({
              where: {
                  user_email: email
              },
              attributes: ['user_id', 'username', 'user_email', 'password']
          })
    }
}

export default userService;