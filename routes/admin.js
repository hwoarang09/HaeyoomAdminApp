const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get("/list", async (req, res) => {
  const admins = await db.Admin.findAll({
    attributes: [
      "admin_member_id",
      "admin_id",
      "admin_name",
      "email",
      "telephone",
      "reg_date",
    ],
  });

  res.render("admin/list", { admins });
});

router.post("/list", async (req, res) => {
  const { admin_name, admin_id } = req.body;

  const searchOption = {
    admin_name,
    admin_id,
  };

  try {
    if (admin_name) {
      const admins = await db.Admin.findAll({
        where: { admin_name: searchOption.admin_name },
      });
      res.render("admin/list", { admins });
    }

    if (admin_id) {
      const admins = await db.Admin.findAll({
        where: { admin_id: searchOption.admin_id },
      });
      res.render("admin/list", { admins });
    }
  } catch (error) {}
});

router.get("/create", async (req, res) => {
  res.render("admin/create");
});

router.post("/create", async (req, res) => {
  const { admin_id, admin_password, admin_name, email, telephone, reg_date } =
    req.body;

  const newAdmin = {
    admin_id,
    admin_password,
    admin_name,
    email,
    telephone,
    reg_date,
  };

  await db.Admin.create(newAdmin);

  res.redirect("list");
});

router.get("/delete", async (req, res) => {
  res.render("admin/delete");
});

router.get("/modify/:id", async (req, res) => {
  const adminIndex = req.params.id;

  const admin = await db.Admin.findOne({
    where: { admin_member_id: adminIndex },
  });

  res.render("admin/modify", { admin });
});

router.post("/modify/:id", async (req, res) => {
  const adminIndex = req.params.id;
  const { admin_member_id, admin_id, admin_name, telephone, reg_date, action } =
    req.body;

  if (action === "save") {
    const updateAdmin = {
      admin_member_id,
      admin_id,
      admin_name,
      telephone,
      reg_date,
    };

    await db.Admin.update(updateAdmin, {
      where: { admin_member_id: adminIndex },
    });
  } else {
    await db.Admin.destroy({ where: { admin_member_id: adminIndex } });
  }

  res.redirect("/admin/list");
});

module.exports = router;
