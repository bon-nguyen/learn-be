const shortId = require("shortid");
const db = require("../db");

module.exports.create = function (req, res, next) {
  res.render("transfer/create", {
    csrfToken: req.csrfToken(),
  });
};

module.exports.postCreate = function (req, res, next) {
  const payload = {
    id: shortId.generate(),
    account: req.body.account,
    amount: req.body.amount,
  };
  //   res.render("transfer/create");
  db.get("transfers").push(payload).write();
  res.redirect("/transfer/create");
};
