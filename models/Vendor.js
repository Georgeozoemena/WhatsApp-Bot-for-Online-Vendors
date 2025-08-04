const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    vendor_id: {type: Number},
    vendor_name: {type: String},
    phone_number: {type: Number}
})