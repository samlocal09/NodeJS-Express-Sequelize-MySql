var env_dev = require('./environments/envDevelopment.js');
var env_prod = require('./environments/envProduction.js');

module.exports = function() {
  let envMode = process.env.NODE_ENV ? process.env.NODE_ENV.trim().toLocaleLowerCase() : 'development';
  console.log('Current NODE_ENV is: ' + envMode);
  switch(envMode){
    case 'development':
      return env_dev;
    case 'production':
      return env_prod;
    default: 
      return env_dev;
  }
};