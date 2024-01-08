/**
 * @license Apache-2.0
 * @copyright EliasBcheraui 2024
 */

'use strict';


/**
 * Custom Modules
 */
const axiosConfig = require('../config/axios.config');


/**
 * Resfresh token is a security credential that allows application to obtain new acces tokens without requiring users to reauthorize the application
 * 
 * @param {string} refreshToken - The refresh token returned from The authorization token request
 * @returns {Object}
 */
const getRefreshToken = async (refreshToken) => {
    try {

        const response = await axiosConfig.token.post('/token', {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        });

        return response;
    } catch (err) {
        console.log(err);
    }
}


module.exports = { getRefreshToken }