const express = require('express');
const app = express();
const productRoutes = express.Router();

// Require Business model in our routes module
let Products = require('../models/products');

// Defined store route
productRoutes.route('/add-product').post(function (req, res) {
  let business = new Products(req.body);
  business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
productRoutes.route('/products').get(function (req, res) {
  Products.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

// Defined edit route
productRoutes.route('/edit-product/:id').get(function (req, res) {
  let id = req.params.id;
  Products.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
productRoutes.route('/update-product/:id').post(function (req, res) {
  Products.findById(req.params.id, function(err, next, business) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete-product/:id').get(function (req, res) {
  Products.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;