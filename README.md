# Express-Sequelize-API boilerplate
This is a simple boilerplate for creating APIs with NodeJs express framework.

Technical are implemented:
 - Config ENV
 - Setup routing
 - Setup service for controller
 - Error handler
 - Joi validation middleware

## Incoming
Authorization

## How to run the application

Database: MySQL version 5.1.73-community - MySQL Community Server (GPL)
 1) Create new database as named "testdb"
 2) Refer path ./scr/app/config/environments/envDevelopment.js to edit host & post based on your device configuarion.
 3) Start the server, you can use XAMPP,... whatever.

Start the node application: Open "src" folder in intergarted interminal then run the commands below:
 1) npm install
 2) npm run build-dev

Sequelize processing will be started to update datatbase schema.

## How to check the API

### For public API
Call the API<GET> http://<hostAddress>:<portNumber>/api/admin/posts/111111

### For private API

Need to get JWT Token:
 1) Use API /api/admin/users with the body below to register new user record.
    {  
        "username": "user1",
        "user_email": "user1@gmail.email",
        "password": "123456"
    }
 2) Use API /api/admin/users/login to login to the system and get the token
    {
        "user_email": "user1@gmail.email",
        "password": "123456"
    }
 3) As private API, add this key-value into header
    Key: x-access-token
    Value: Token is provided after logged in successfully
