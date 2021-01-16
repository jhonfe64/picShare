const mongoose = require('mongoose');
const {Schema} = mongoose;

const CommentsSchema = new Schema({
    comment: String
});

