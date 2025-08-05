const mongoose = require('mongoose')

const messageTemplateSchema = new mongoose.Schema({
    template_id: {type: Number},
    template_name: {type: String},
    placeholder: [{type: mongoose.Schema.ObjectId, ref: 'MessageTemplate'}],
})