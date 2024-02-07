//관리자 사이트 채팅방 정보처리 라우팅
//http://localhost:3001/designer

var express = require("express");
var router = express.Router();
const db = require("../models/index");
const { Op } = require("sequelize");

var apiResult = {
  code: 500,
  data: null,
  msg: "",
};

router.get("/list", async (req, res) => {
  try {
    const designer_list = await db.Designer.findAll({
      where: {
        used_yn_code: 1,
      }, //#	직책	이름	소개	재직상태	등록일시
      attributes: [
        "designer_id",
        "position",
        "designer_name",
        "designer_desc",
        "designer_state_code",
        "reg_date",
      ],
    });

    apiResult.code = 200;
    apiResult.data = designer_list;
    apiResult.msg = "designer list get 성공";
  } catch (err) {
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.msg = "designer list시 에러";
    console.log("designer list할 때 에러 ", err);
  }
  res.json(apiResult);
});
router.post("/list", async (req, res) => {
  try {
    const { designer_name, position, designer_state_code } = req.body;

    const designer_list = await db.Designer.findAll({
      where: {
        used_yn_code: 1,
        designer_name: designer_name ? designer_name : { [Op.ne]: null },
        position: position ? position : { [Op.ne]: null },
        designer_state_code: designer_state_code
          ? designer_state_code
          : { [Op.ne]: null },
      }, //#	직책	이름	소개	재직상태	등록일시
      attributes: [
        "designer_id",
        "position",
        "designer_name",
        "designer_desc",
        "designer_state_code",
        "reg_date",
      ],
    });

    apiResult.code = 200;
    apiResult.data = designer_list;
    apiResult.msg = "designer list post 성공";
  } catch (err) {
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.msg = "designer list시 에러";
    console.log("designer list할 때 에러 ", err);
  }
  res.json(apiResult);
});

router.post("/create", async (req, res) => {
  try {
    const { designer_name, position, designer_desc, email, telephone } =
      req.body;
    const newDesigner = {
      designer_name,
      position,
      designer_img_path: "",
      designer_desc,
      email,
      telephone,
      designer_state_code: 1,
      reg_date: Date.now(),

      used_yn_code: 1,
    };
    var result = await db.Designer.create(newDesigner);
    apiResult.code = 200;
    apiResult.data = result;
    apiResult.msg = "designer추가성공";
  } catch (err) {
    console.log("err in designerAdd : ", err);
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.msg = "designer추가중 err 발생함";
  }
  res.json(apiResult);
});

//localhost:3001/designer/modify
router.get("/modify/:id", async (req, res) => {
  const channelIndex = req.params.id;

  const channel = await db.Channel.findOne({
    where: { channel_id: channelIndex },
  });

  res.render("channel/modify", { channel });
});

//localhost:3001/channel/modify
router.post("/modify/:id", async (req, res) => {
  const channelIndex = req.params.id;

  const {
    comunity_id,
    category_code,
    channel_name,
    user_limit,
    channel_img_path,
    channel_state_code,
    channel_desc,
    reg_date,
    reg_member_id,
    edit_member_id,
    edit_date,
    action,
  } = req.body;

  try {
    if (action === "save") {
      const updateChannel = {
        comunity_id,
        category_code,
        channel_name,
        user_limit,
        channel_img_path,
        channel_state_code,
        channel_desc,
        reg_date,
        reg_member_id,
        edit_member_id,
        edit_date,
      };

      await db.Channel.update(updateChannel, {
        where: { channel_id: channelIndex },
      });
    } else {
      await db.Channel.destroy({ where: { channel_id: channelIndex } });
    }
  } catch (error) {
    console.log(error);
  }

  res.redirect("/channel/list");
});

router.get("/delete", async (req, res) => {
  res.render("channel/delete");
});

module.exports = router;
