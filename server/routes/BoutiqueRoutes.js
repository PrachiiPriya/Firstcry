const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/ProductSchema'); 

router.get('/:collection', async (req, res) => {
  const collection = req.params.collection;
    const products = await Product.find({ collection });
    res.status(200).json(products);
  });


module.exports = router;