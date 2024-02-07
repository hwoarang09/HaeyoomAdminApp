var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
var db = require("../models/index");
var apiResult = {
  code: 500,
  data: null,
  msg: "",
};

router.get("/list", async (req, res) => {
  try {
    const customer_list = await db.Customer.findAll({
      where: {
        used_yn_code: 1,
      }, //#	직책	이름	소개	재직상태	등록일시
      attributes: [
        "customer_id",
        "customer_name",
        "telephone",
        "entry_type_code",
        "membership_state_code",
        "manage_designer_id",
        "reg_date",
      ],
    });

    apiResult.code = 200;
    apiResult.data = customer_list;
    apiResult.msg = "customer list get 성공";
  } catch (err) {
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.msg = "customer list시 에러";
    console.log("customer list할 때 에러 ", err);
  }
  res.json(apiResult);
});
router.post("/list", async (req, res) => {
  try {
    const { customer_name, telephone, membership_state_code } = req.body;

    const customer_list = await db.Customer.findAll({
      where: {
        used_yn_code: 1,
        customer_name: customer_name ? customer_name : { [Op.ne]: null },
        telephone: telephone ? telephone : { [Op.ne]: null },
        membership_state_code: membership_state_code
          ? customer_state_code
          : { [Op.ne]: null },
      }, //#	직책	이름	소개	재직상태	등록일시
      attributes: [
        "customer_id",
        "customer_name",
        "telephone",
        "entry_type_code",
        "membership_state_code",
        "manage_designer_id",
        "reg_date",
      ],
    });

    apiResult.code = 200;
    apiResult.data = customer_list;
    apiResult.msg = "customer list post 성공";
  } catch (err) {
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.msg = "customer list시 에러";
    console.log("customer list할 때 에러 ", err);
  }
  res.json(apiResult);
});

router.post("/create", async (req, res) => {
  try {
    const {
      customer_name,
      telephone,
      entry_type_code,
      membership_state_code,
      birth_date,
      reg_date,
      manage_designer_id,
    } = req.body;
    console.log(
      customer_name,
      telephone,
      entry_type_code,
      membership_state_code,
      birth_date,
      reg_date,
      manage_designer_id
    );
    const newCustomer = {
      customer_name,
      telephone,
      profile_img_path: "",
      entry_type_code,
      membership_state_code,
      birth_date,
      designer_state_code: 1,
      reg_date: Date.now(),
      reg_designer_id: 0,
      manage_designer_id,
      used_yn_code: 1,
    };
    var result = await db.Customer.create(newCustomer);
    apiResult.code = 200;
    apiResult.data = result;
    apiResult.msg = "customer 추가성공";
  } catch (err) {
    console.log("err in customer Add : ", err);
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.msg = "customer 추가중 err 발생함";
  }
  res.json(apiResult);
});
//member삭제
router.get("/delete", async (req, res, next) => {
  var member_id = req.query.member_id;

  // console.log("멤버아이디:", member_id);

  await db.Member.destroy({ where: { member_id: member_id } });

  res.redirect("/member/list");
});

//member수정
router.get("/modify/:member_id", async (req, res, next) => {
  var member_id = req.params.member_id;

  var member = await db.Member.findOne({ where: { member_id: member_id } });

  res.render("member/modify", { member });
});

router.post("/modify/:member_id", async (req, res, next) => {
  var member_id = req.params.member_id;

  var email = req.body.email;
  var member_password = req.body.member_password;
  var name = req.body.name;
  var profile_img_path = req.body.profile_img_path;
  var telephone = req.body.telephone;
  var entry_type_code = req.body.entry_type_code;
  var birth_date = req.body.birth_date;

  var member = {
    email,
    member_password,
    name,
    profile_img_path,
    telephone,
    entry_type_code,
    use_state_code: 1,
    birth_date,
    reg_date: Date.now(),
    reg_member_id: 881,
    edit_date: Date.now(),
    edit_member_id: 991,
  };

  await db.Member.update(member, { where: { member_id: member_id } });

  res.redirect("/member/list");
});

module.exports = router;
