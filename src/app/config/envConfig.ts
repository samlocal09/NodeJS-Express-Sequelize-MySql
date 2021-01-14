import { env_dev } from './environments/envDevelopment';
import { env_prod } from './environments/envProduction';

export function getEnv() {
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