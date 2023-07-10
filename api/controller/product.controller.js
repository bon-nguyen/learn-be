const Product = require("../../models/products.model");

module.exports.index = async function (req, res) {
  const products = await Product.find();
  res.json(products);
};

module.exports.create = async function (req, res) {
  const product = await Product.create(req.body);
  res.json(product);
};
