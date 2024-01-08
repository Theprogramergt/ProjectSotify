/**
 * @license Apache-2.0
 * @copyright EliasBcheraui 2024
 */

'use strict';

const authenticatedUser = (req, res, next) =>{
    const{
        acces_token,
        refresh_token
    } = req.cookies;

    if (acces_token && !refresh_token){
        return res.redirect('/auth');
    } else if(!acces_token && !refresh_token){
        return res.redirect('/login');
    } else if (!acces_token && refresh_token){
        return res.redirect(`/auth/refresh_token?redirect=${req.originalUrl}`);
    }
    next();
}



module.exports = authenticatedUser;