const mongoose = require('mongoose');


const querySchema = new mongoose.Schema({
    name : String,
    email: String,
    subject: String,
    message: String
});
module.exports = mongoose.model('queries',querySchema);