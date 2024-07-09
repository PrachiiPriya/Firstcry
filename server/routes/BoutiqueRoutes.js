const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
<<<<<<< HEAD
const Product = require('../../models/ProductSchema'); 
=======
const Product = require('../models/ProductSchema'); 
const products=require('../ProductData');
>>>>>>> origin/master

router.get('/:collection', async (req, res) => {
  const collection = req.params.collection;
    const products = await Product.find({ collection });
    res.status(200).json(products);
  });

router.get('/search/:query', async (req, res) => {
    const query = req.params.query;
    const products = await Product.find({ title: { $regex: query, $options: 'i' } }); 
    res.status(200).json(products);
});

module.exports = router;