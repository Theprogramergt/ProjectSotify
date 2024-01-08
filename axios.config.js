/**
 * @license Apache-2.0
 * @copyright EliasBcheraui 2024
 */

'use strict';


/**
 *  Node Modules
 */
const axios = require('axios').default;
const querystring = require('querystring');


/**
 *  Custom  Modules
 */
const apiConfig = require('./api.config');


/**
 *  axios instance for acces token and refresh token request
 */
const token = axios.create({
    baseURL: apiConfig.TOKEN_BASE_URL,
    headers: {
        'Authorization': `Basic ${(Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET).toString('base64'))}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});


module.exports = {
    token
}