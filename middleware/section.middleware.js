const shortid = require("shortid");
const db = require("../db");

module.exports = function (req, res, next) {
  if (!req.signedCookies.sectionId) {
    const sectionId = shortid.generate();
    res.cookie("sectionId", sectionId, {
      signed: true,
    });

    db.get("sections").push({
      id: sectionId,
    });
  }
  next();
};
