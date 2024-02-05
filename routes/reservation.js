var express = require("express");
var router = express.Router();
var db = require("../models/index");
var Op = db.Sequelize.Op;
/* GET home page. */

var dateContainerArrow = 0;

router.get("/arrowRight", async (req, res, next) => {
  dateContainerArrow += 1;
  //res.send("arrow right click : " + dateContainerArrow);
  res.render("../main", { dateContainerArrow: dateContainerArrow });
});

module.exports = router;
