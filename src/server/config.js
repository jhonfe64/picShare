const express = require('express');
const ejs = require('ejs');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const routes = require('../routes/index');


module.exports = function(app){
    app.set('port', process.env.PORT || 4000);
    app.set('views', path.join(__dirname, '../views'))
    app.set('view engine', 'ejs');


    app.use(morgan('dev'));
    // app.use(multer({
    //     dest:  path.join(__dirname, '../public/upload/temp');
    
    // }).single('image'));

    app.use(express.urlencoded({extended: false}));

    app.use(express.json());

    app.use(express.static(path.join(__dirname, '../public')));

    routes(app);

    return app;
}


