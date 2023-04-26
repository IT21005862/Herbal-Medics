const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({

    itemId: {
        type: String
    },
    itemName: {
        type: String
    },
    unitPrice: {
        type: String
    },
    quantity: {
        type: String
    },
    total: {
        type:String
    }
})

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;