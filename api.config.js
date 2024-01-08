/**
 * @license Apache-2.0
 * @copyright EliasBcheraui 2024
 */

'use strict';


/**
 * node modules
 */
require('dotenv').config();


// The Base ADDRESS OF WEB API
const BASE_URL = 'https://api.spotify.com/v1';

// The Base Address Of Spotify Authentication Token
const TOKEN_BASE_URL = 'https://accounts.spotify.com/api';

// Spotify Client Id
const CLIENT_ID = process.env.CLIENT_ID;

// Spotify  Client Secret
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Redirect Uri for spotify authorization code flow
const REDIRECT_URI = process.env.REDIRECT_URI;

// Scope of spotify api request
const SCOPE = process.env.SCOPE;

// Authentication state key:
const STATE_KEY = 'spotify_auth_state';

// Api Request Queries 
const MARKET = 'US';
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;


module.exports = {
    BASE_URL,
    TOKEN_BASE_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
    SCOPE,
    STATE_KEY,
    MARKET,
    LOW_LIMIT,
    DEFAULT_LIMIT
}