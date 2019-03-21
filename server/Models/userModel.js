const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false,
        required: true
    }
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');