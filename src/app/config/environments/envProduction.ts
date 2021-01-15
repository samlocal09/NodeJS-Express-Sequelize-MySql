export const env_prod = {
    database: 'testdb',
    username: 'root',
    password: '',
    host: 'localhost',
    port: 8083,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };