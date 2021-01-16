const express = require('express');
const router = express.Router();
const home = require('../controllers/home');
const users = require('../controllers/users');
const signup = require('../controllers/signup');
const verify_fields = require('../middlewares/signUp');

module.exports = (app) => {
   
    router.get('/', home.index);

    router.get('/profile', users.profile);

    router.get('/signup', signup.sign_up);

    router.post('/signup', verify_fields.verify_fields, verify_fields.verify_passwords, signup.new_user);

    app.use(router);
} 