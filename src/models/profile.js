const express = require('express');
const mongoose = require('mongoose');
const {Schema} = expess;

const ImageSchema = new Schema({
    image_name: String,
    image_description: String,
    categorie: String,
    //comments: populado
    views: {type: Number, default: 0}
});


module.exports = mongoose.models('Images', ImageSchema);