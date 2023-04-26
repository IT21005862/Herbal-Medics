const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    customerID: {
        type: String,
        required: true
    },
    cartContents: {
        type: [Object]
    },
    placedDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default : "pending"
    },
    estimatedDeliveryDate: {
        type: Date
    },
    address: {
        type: String
    }
})

const order = mongoose.model('order', orderSchema)
module.exports = order