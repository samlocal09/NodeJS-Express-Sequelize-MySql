import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';

import { _ROOT_CONF } from './app/config/rootConfig';
import adminRoutes from './app/routes/admin.route';

import { errorHandler } from './app/middleware/errorHandler';

var app = express();

// ========================================
// Running Sequelize
// ========================================
Object.keys(_ROOT_CONF.sequelize.models).forEach(function(name){
  console.log('sequelize model: ' + name);
});

var isSequelizeForce = false;
_ROOT_CONF.sequelize.sync({force: isSequelizeForce}).then(() => {
  console.log(`sequelize sync { force:  ${isSequelizeForce}}`);
});

console.log('Checking DB conection...');
_ROOT_CONF.sequelize.authenticate()
  .then(() => {
    console.log('Successfully conencted to the database');
  })
  .catch(err => {
    console.error('Unable to conenct to the database: ', err);
  })

// ========================================
// Register CORS
// ========================================
app.use(cors());

// ========================================
// Register express routing
// ========================================
app.use(bodyParser.json());
app.use('/api/admin', adminRoutes);

// ========================================
// Register middleware
// ========================================
app.use(methodOverride())
app.use(errorHandler);

app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Something Broke!');
   })
   
// ========================================
// Register server-side
// ========================================
const port: any = process.env.PORT || _ROOT_CONF.port;
var server = app.listen(port, '0.0.0.0');
console.log(`Server running at http://0.0.0.0:${port}/`)

export default server;