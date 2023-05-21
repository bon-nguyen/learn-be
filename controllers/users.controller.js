const shortid = require("shortid");

module.exports.index = function (req, res) {
  console.log("res === cookes", req.cookies);
  res.render("users/index", {
    users: db.get("users").value(),
  });
};

module.exports.search = function (req, res) {
  const textSearch = req.query.q;
  const users = db
    .get("users")
    .value()
    .filter(
      (user) =>
        user.name.toLowerCase().includes(textSearch.toLocaleLowerCase()) !== -1
    );
  res.render("/index", {
    users: users,
  });
};

module.exports.create = function (req, res) {
  const errors = [];
  if (!req.body.name) {
    errors.push("Name is required");
  }
  if (!req.body.phone) {
    errors.push("Phone is required");
  }
  if (errors?.length > 0) {
    return res.render("users/create", {
      errors: errors,
    });
  }

  db.get("users")
    .push({ id: shortid.generate(), ...req.body })
    .write();
  res.redirect("/users");
};

module.exports.viewCreate = function (req, res) {
  res.render("users/create");
};

module.exports.viewDetails = function (req, res) {
  const userId = req.params.id;
  const user = db.get("users").find({ id: userId }).value();
  res.render("users/view", {
    user: user,
  });
};

module.e;
