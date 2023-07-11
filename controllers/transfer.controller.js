<<<<<<< HEAD
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
=======
const db = require('../db')
const shortid = require('shortid')

module.exports.create = function (req, res, next) {
    res.render('transfer/create')
}

module.exports.postCreate = function (req, res, next) {
    const payload = {
        id: shortid.generate(),
        amount: req.body.amount ? parseInt(req.body.amount) : 0,
        userId: req.body.userId ?? ''
    }
    db.get('transfers').push(payload).write()
    res.redirect('/transfer')
}
>>>>>>> a771af1718a719e8b61f68a9b392e88abb258817
