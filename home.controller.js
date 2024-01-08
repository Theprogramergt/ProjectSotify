/**
 * @license Apache-2.0
 * @copyright EliasBcheraui 2024
 */

'use strict';


/**
 * Custom Modules
 */


const home  = async (req, res) => {
    res.render('./pages/home');
}


module.exports = { home }
