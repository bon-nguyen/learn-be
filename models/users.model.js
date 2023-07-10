const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  id: String,
  email: String,
  password: String,
  image: String,
});

const User = model("User", userSchema, "users");

module.exports = User;
