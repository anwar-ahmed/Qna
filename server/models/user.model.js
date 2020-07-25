const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    type: String,
    status: String
});

module.exports = mongoose.model("user", UserSchema);
