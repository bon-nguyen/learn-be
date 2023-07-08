const dotenv = require("dotenv");
dotenv.config();
console.log("Its Me", process.env);
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users.route");
const loginRoutes = require("./routes/auth.route");
const productRoutes = require("./routes/products.route");

const app = express();
const cookieParser = require("cookie-parser");

// middleware
const sectionMiddleware = require("./middleware/section.middleware");
const authMiddleware = require("./middleware/auth.middleware");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SECTION_SECRET));
app.use(sectionMiddleware);

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));

app.use("/products", productRoutes);
app.use("/users", authMiddleware.requireAuth, userRoutes);
app.use("/auth", loginRoutes);

app.listen(3000, function () {
  console.log("Server listening sport 3000");
});
