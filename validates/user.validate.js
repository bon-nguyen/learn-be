module.exports.checkCreate = function (req, res, next) {
  const errors = [];
  if (!req.body.email) {
    errors.push("Email is required");
  }
  if (!req.body.password) {
    errors.push("Password is required");
  }
  if (errors?.length > 0) {
    return res.render("users/create", {
      errors: errors,
    });
  }
  next();
};
