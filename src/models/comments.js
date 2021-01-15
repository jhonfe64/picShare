const express = require('express');
const {Schema} = express;

const CommentsSchema = new Schema({
    comment: String
});

