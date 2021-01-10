const EvnConfig = require('./envConfig.js');
var env = new EvnConfig();

const _ROOT_CONF = {};

//---------------------------------------
// Common info
_ROOT_CONF.port = env.port;

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
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
_ROOT_CONF.sequelize = sequelize;

//Models
var postModel = require('../models/post.model')(sequelize, Sequelize);

_ROOT_CONF.db = {
  post: postModel
}

module.exports = _ROOT_CONF;