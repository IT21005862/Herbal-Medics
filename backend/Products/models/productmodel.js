const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productname: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  Stocks: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,

    default: new Date(),
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
