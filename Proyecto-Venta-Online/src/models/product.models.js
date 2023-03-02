'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = Schema({
   name: String,
   description: String,
   price: Number,
   stock: Number,
   category: {Types: Schema.Types.ObectId, ref: 'Category'} 
});

module.exports = mongoose.model('Product', ProductSchema)