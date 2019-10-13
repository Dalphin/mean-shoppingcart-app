
// business.route.js

const express = require('express');
const app = express();
const shoppingRoutes = express.Router();

// Require Business model in our routes module
let Models = require('../models/Schema');


// Defined get data(index or listing) route for products
shoppingRoutes.route('/products').get(function (req, res) {
    Models.Products.find(function (err, resp){
    if(err){
      console.log(err);
    }
    else {
      res.json(resp);
    }
  });
});

// Add product
shoppingRoutes.route('/add-product').post(function (req, res) {
  Models.Products.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = shoppingRoutes;