import { getEnv }  from './envConfig';
import { PostFactory } from '../models/post.model';
import { UserFactory } from '../models/user.model';

var env = getEnv();

//---------------------------------------
// Register Sequelize
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliasesConfig = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliasesConfig,
  operatorsAliases: 0,
  logging:  function(msg) { console.log(msg)},
  
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

//Models
var postModel = PostFactory(sequelize, Sequelize);
var userModel = UserFactory(sequelize, Sequelize);

export const _ROOT_CONF = {
    port: env.port,
    sequelize: sequelize,
    db: {
        post: postModel,
        user: userModel
    }
};