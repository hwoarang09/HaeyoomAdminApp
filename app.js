const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const layout = require("express-ejs-layouts");
require("dotenv").config();
var sequelize = require("./models/index").sequelize;
var session = require("express-session");

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const salonRouter = require("./routes/salon");
const adminRouter = require("./routes/admin");
const customerRouter = require("./routes/customer");
const designerRouter = require("./routes/designer");
const reservationRouter = require("./routes/reservation");

const app = express();

sequelize.sync();

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "testsecret",
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 5, //5분동안 서버세션을 유지하겠다.(1000은 1초)
    },
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("layout", "layout");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.set("layout extractMetas", true);

app.use(layout);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/salon", salonRouter);
app.use("/admin", adminRouter);
app.use("/customer", customerRouter);
app.use("/designer", designerRouter);
app.use("/reservation", reservationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
