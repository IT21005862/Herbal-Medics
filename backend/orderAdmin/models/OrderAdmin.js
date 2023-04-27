const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    customerID: {
        type: String,
        required: true
    },
    cartContents: {
        type: String,
        required: true
    },
    placedDate: {
        type: Date,
       
    },
    status: {
        type: String,
        required: true
    },
    estimatedDeliveryDate: {
        type: Date
    },
    address: {
        type: String
    }
})

const OrderAdmin = mongoose.model('OrderAdmin', orderSchema)
module.exports = OrderAdmin;