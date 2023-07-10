const mongodb = require("mongoose");
const { Schema, model } = mongodb;

const productSchema = new Schema({
  name: String,
  images: String,
  description: String,
});

const Product = model("Product", productSchema, "products");

module.exports = Product;
