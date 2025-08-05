const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_id: {type: Number},
    product_name: {type: String},
    description: {type: String},
    img_url: {type: String},
    price: {type: String},
    is_new: {type: Boolean},
})

module.exports = mongoose.model('Product', productSchema)