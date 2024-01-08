/**
 * @license Apache-2.0
 * @copyright EliasBcheraui 2024
 */

'use strict';


/**
 * node modules
 */
const router = require('express').Router();


/**
 * CUSTOM MODULES
 */
const { auth, callback } = require('../controllers/auth.controller');
const { refreshToken } = require('../controllers/refresh_token.controller');


router.get('/', auth);

router.get('/callback', callback);

router.get('/refresh_token', refreshToken);



module.exports = router;