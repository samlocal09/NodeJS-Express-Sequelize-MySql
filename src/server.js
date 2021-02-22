var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const _ROOT_CONF = require('./app/config/rootConfig');

var adminRoutes = require('./app/routes/admin.route');

var methodOverride = require('method-override');
var errorHandler = require('./app/middleware/errorHandler');

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

// ========================================
// Register server-side
// ========================================
const port = process.env.PORT || _ROOT_CONF.port;
var server = app.listen(port, '0.0.0.0');
console.log(`Server running at http://0.0.0.0:${port}/`)
