// const db = require("../db");
const Product = require("../models/products.model");

module.exports.index = async function (req, res) {
  // const page = req.query.page ?? 1;
  // const perPage = 8;
  // const start = (page - 1) * perPage;
  // const end = (page - 1) * perPage + perPage;
  // const products = db.get("products").value().slice(start, end);
  // res.render("products/index", {
  //   products: products,
  // });
  const products = await Product.find();
  res.render("products/index", {
    products: products,
  });
};
