const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    customer_id: {type: Number},
    customer_name: {type: String},
    phone_number: {type: Number},
    subscribed_vendors: [{type: mongoose.Schema.Types.ObjectId, ref:'Customer'}]
})

module.exports = mongoose.model('Customer', customerSchema)