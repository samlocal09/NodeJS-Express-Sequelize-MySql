import { _ROOT_CONF } from '../config/rootConfig';
import { bcrypt } from 'bcryptjs'; 
const User = _ROOT_CONF.db.user;
export class UserService {

    public create(req){
        var hasedPassword = bcrypt.hashSync(req.body.password, 8);
    
        return User.create({
            username: req.body.username,
            user_email: req.body.user_email,
            password: hasedPassword
        });
    };
    
    public getById(id){
      return User.findOne({
          where: {
              user_id: id
          },
          attributes: ['user_id', 'username', 'user_email']
      })
    };
    
    public getUserByEmail(email){
        return User.findOne({
            where: {
                user_email: email
            },
            attributes: ['user_id', 'username', 'user_email', 'password']
        })
      };
}

