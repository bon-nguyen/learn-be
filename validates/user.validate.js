module.exports.checkCreate = function (req, res, next) {
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
  next();
};
