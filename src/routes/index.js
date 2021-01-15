const express = require('express');
const router = express.Router();
const home = require('../controllers/home');
const users = require('../controllers/users');
const signup = require('../controllers/signup');
module.exports = (app) => {
   
    router.get('/', home.index);

    router.get('/profile', users.profile);

    router.get('/signup', signup.sign_up)

    app.use(router);
} 