var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    id: String,
    description: String,
    price: String,
    company: String,
    style: String,
    image: String
})

module.exports = mongoose.model('Product', userSchema)