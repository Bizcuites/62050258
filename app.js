const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const blogRouter = require("./routes/blog");
const dataRouter = require("./routes/data");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.i4958ff.mongodb.net/node-api?retryWrites=true&w=majority"
);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/blog", blogRouter);
app.use("/data", dataRouter);
module.exports = app;
