// Business.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Products = new Schema({
  product_name: {
    type: String
  },
  product_quantity: {
    type: String
  },
  product_price: {
    type: Number
  }
},{
    collection: 'products'
});

module.exports = mongoose.model('products', Products);