/**
 * @license Apache-2.0
 * @copyright Code 2024
 */

'use strict';

/**
 * node modules
 */
const cors = require('cors');
const  cookieParser = require('cookie-parser');



/**
 * Custom Modules
 */
const login = require('./src/routes/login.route');
const auth = require('./src/routes/auth.route');
const authenticatedUser = require('./src/middlewares/auth_user.middleware');
const home = require('./src/routes/home.route');

// Initial express app 
const express = require('express');
const app = express();


/**
 * EJS SETTING
 */
app.set('view engine', 'ejs');


/**
 * SETTING STATIC DIRECTORY
 */
app.use(express.static(`${__dirname}/public`));


/**
 * ENABLE CORS  &  cookie  parser
 */
app.use(cors()).use(cookieParser());

/**
 * Login Page
 */
app.use('/login', login);


/**
 * AUTH Page
 */
app.use('/auth', auth);


/**
 *  Check user is authenticated
 */
app.use(authenticatedUser);


/**
 * Home Page
 */
app.use('/', home);


app.listen(5000, () =>{
    console.log("Server Listening att http://localhost:5000");
});