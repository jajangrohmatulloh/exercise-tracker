const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userDetailSchema = require('./userDetail');

const userSchema = new Schema({
    username: {
        unique: true ,
        type: String,
        required: true,
        trim: true
    },
    detail: userDetailSchema
}, {timestamps: true})

const User = mongoose.model('User', userSchema);

module.exports = User;