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
 * Custom Modules
 */
const { home } = require('../controllers/home.controller');


router.get('/', home);


module.exports = router;