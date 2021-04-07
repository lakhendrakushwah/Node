const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    address:String,
});

const user = mongoose.model('users',userSchema);
module.exports = user;