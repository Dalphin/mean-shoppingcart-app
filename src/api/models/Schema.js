const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Categories
let products_schema = new Schema({
  product_name: String,
  product_quantity: Number,
  product_price: Number
},{
    collection: 'products'
});
let products_model =  mongoose.model('products', products_schema);

module.exports = {
    Products: products_model
};