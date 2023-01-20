const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailSchema = new Schema({
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: String, required: true}
});

module.exports = userDetailSchema;