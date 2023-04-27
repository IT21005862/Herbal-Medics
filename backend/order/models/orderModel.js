const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    itemid: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    unitPrice: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
    customerID: {
        type: String,
        required: true
    },
    placedDate: {
        type: String
    },
    status: {
        type: String,
    },
    estimatedDeliveryDate: {
        type: String
    },
    address: {
        type: String
    },
    telephone: {
        type: String
    }
})

const order = mongoose.model('order', orderSchema)
module.exports = order