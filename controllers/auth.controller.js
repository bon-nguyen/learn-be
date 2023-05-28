const md5 = require("md5");
const db = require("../db");

module.exports.login = function (req, res) {
  res.render("auth/login");
};

module.exports.postLogin = function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = db.get("users").find({ email: email }).value();

  if (!user) {
    res.render("auth/login", {
      errors: ["User does not exit"],
    });
    return;
  }

  const hashPassword = md5(password);

  if (user.password !== hashPassword) {
    res.render("auth/login", {
      errors: ["User does not exit"],
    });
    return;
  }
  res.cookie("userId", user.id, {
    signed: true,
  });
  res.redirect("/users");
};
