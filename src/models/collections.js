const mongoose = require('mongoose');
const {Schema} = mongoose;

const CollectionSchema = new Schema({
    collection_name: String,
    collection_images: String,
});


module.exports = mongoose.models('Collection', CollectionSchema);