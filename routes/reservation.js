var express = require("express");
var router = express.Router();
var db = require("../models/index");
var Op = db.Sequelize.Op;
/* GET home page. */


var apiResult = {
  code: 500,
  data: null,
  msg: "",
};

router.get("/list", async (req, res) => {
  try {
    const reservation_list = await db.Reservation.findAll({
      where: {
        used_yn_code: 1,
      }, //#	직책	이름	소개	재직상태	등록일시
      attributes: [
        "reservation_id",
        "customer_name",
        "designer_name",
        "reservation_state",
        "memo",
        "reg_date",
      ],
    });

    apiResult.code = 200;
    apiResult.data = reservation_list;
    apiResult.msg = "reservation list get 성공";
  } catch (err) {
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.msg = "reservation list시 에러";
    console.log("reservation list할 때 에러 ", err);
  }
  res.json(apiResult);
});

router.post("/list", async (req, res) => {
  try {
    const { customer_name, designer_name, reservation_state } = req.body;

    const chk_cn = await db.Customer.findOne({
      where: { customer_name },
    });
    const chk_dn = await db.Designer.findOne({
      where: { designer_name },
    });
    console.log(
      "hi",
      customer_name,
      designer_name,
      reservation_state,
      chk_cn,
      chk_dn
    );
    if (chk_cn && chk_dn) {
      const reservation_list = await db.Reservation.findAll({
        where: {
          used_yn_code: 1,
          customer_name: customer_name ? customer_name : { [Op.ne]: null },
          designer_name: designer_name ? designer_name : { [Op.ne]: null },
          reservation_state: reservation_state
            ? reservation_state
            : { [Op.ne]: null },
        }, //#	직책	이름	소개	재직상태	등록일시
        attributes: [
          "designer_id",
          "customer_name",
          "designer_name",
          "reservation_state",
          "memo",
          "reg_date",
        ],
      });

      apiResult.code = 200;
      apiResult.data = reservation_list;
      apiResult.msg = "reservation list post 성공";
    } else {
      apiResult.code = 400;
      apiResult.data = {};
      apiResult.msg = "reservation list post 데이터없음.";
    }
  } catch (err) {
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.msg = "reservation list시 에러";
    console.log("reservation list할 때 에러 ", err);
  }
  res.json(apiResult);
});

router.post("/create", async (req, res) => {
  try {
    const {
      customer_name,
      designer_name,
      reservation_state,
      memo,
      cut_style,
      price,
      reservation_start_date,
      reservation_end_date,
    } = req.body;
    const newReservation = {
      customer_name,
      customer_id: 1,
      designer_name,
      designer_id: 1,
      reservation_state,
      memo,
      cut_style,
      price,
      reservation_start_date,
      reservation_end_date,
      reg_date: Date.now(),

      used_yn_code: 1,
    };
    var result = await db.Reservation.create(newReservation);
    apiResult.code = 200;
    apiResult.data = result;
    apiResult.msg = "reservation 추가성공";
  } catch (err) {
    console.log("err in reservationAdd : ", err);
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.msg = "reservation추가중 err 발생함";
  }
  res.json(apiResult);
});

module.exports = router;
