const env_dev = {
    database: 'testdb',
    username: 'root',
    password: '',
    host: 'localhost',
    port: 8082,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
  
  module.exports = env_dev;