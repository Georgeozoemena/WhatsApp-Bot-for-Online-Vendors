const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    vendor_id: {type: Number},
    vendor_name: {type: String},
    phone_number: {type: Number},
    subscribers: [String],
    website_link: String,
    whatsapp_catalog_link: {type: String},
    product_list: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
})

module.exports = mongoose.model('Vendor', vendorSchema)