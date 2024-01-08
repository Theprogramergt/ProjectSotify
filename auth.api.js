/**
 * @license Apache-2.0
 * @copyright EliasBcheraui 2024
 */

'use strict';


/**
 * Custom Modules
 */
const apiConfig = require('../config/api.config');
const axiosConfig = require('../config/axios.config');


/**
 * Get Acces token for api request
 * @param {string} code An authorization code that can be exchanged for an Acces Token
 * @returns {Object}
 */
const getToken = async  (code) => {
    try{

        const response = await axiosConfig.token.post('/token', {
            grant_type: 'authorization_code',
            code,
            redirect_uri: apiConfig.REDIRECT_URI
        });

        return response;

    } catch (err){
        console.log(err);
    }
}


module.exports = { getToken }