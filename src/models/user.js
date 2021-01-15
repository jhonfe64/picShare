const express = require('express');
const {Schema} = express();

const UserSchema = new Schema({
    names: String,
    last_names: String,
    email: String,
    user: String,
    password: String,
    role: String,
    image_profile: String,
    //images: se popula
    //collections: se popula
    time_stamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('user', UserSchema);
