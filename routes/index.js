const express = require("express");
const router = express.Router();

var db = require("../models/index");
var bcrypt = require("bcryptjs");
var AES = require("mysql-aes");

const { isLoggedIn, isNotLoggedIn } = require("./sessionMiddleware");

var resultMsg = "";

var path = require("path");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
require("dotenv").config();
const cookieSession = require("cookie-session");
const helmet = require("helmet");

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

const AUTH_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log("Google profile", profile);
  done(null, profile); //null은 에러가 없다.
}

//passport전략부터 정하고 router에서 사용함.
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

// Save the session to the cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Read the session from the cookie
passport.deserializeUser((id, done) => {
  // User.findById(id).then(user => {
  //   done(null, user);
  // });
  done(null, id);
});

router.use(helmet());
// router.use(
//   cookieSession({
//     name: "session",
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
//   })
// );

router.use(passport.initialize());
router.use(passport.session()); //req.user사용할 수 있게 해줌

function checkLoggedIn(req, res, next) {
  console.log("checkLoggin start, cur User ", req.user);
  //const isLoggedIn = req.user;//다른 방식으로도 될 수 잇으니까..이건 너무 지엽적
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    //return res.status(401).json({ error: "You must login!" });
    next();
  } else next();
}

//여기서 로그인
router.get(
  "/auth/google/",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

//구글에서 authorization code를 보내주는 라우터
//구글 OAuth에서 등록한 라우팅 경로임
//passport.authenticate('google')이 알아서 로그인함.
//여기의 2번재 인자는 옵션. 성공하거나 실패할 때 향할 주소 옵션??
//세번째 인자는 뭐가 됐든 처리하는 핸들러.
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/main",
    session: true,
  }),
  (req, res) => {
    console.log("Google called us back!");
  }
);

//로그아웃 하는 경로
router.get("/auth/logout", (req, res) => {
  //Removes req.user and clears any logged in session
  req.logout();
  res.redirect("/");
});

router.get("/secret", checkLoggedIn, (req, res) => {
  return res.send("Your Secret Value is 42HANMOOL!!");
});

router.get("/failure", (req, res) => {
  return res.send("Failed to log in!");
});

/* GET home page. */
// router.get("/", (req, res) => {
//   console.log("hi");
//   //res.send("hi");
//   res.sendFile(path.join(__dirname, "../", "public", "index.html"));
// });

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.send("google login");
// });

/*
-관리자 웹사이트의 로그인 웹페이지를 제공하는 라우팅 메소드
-사용자 계정정보가 아닌 관리자 계정정보를 통한 로그인을 시도합니다
-http://localhost:3001
*/

//isNotLoggedIn,
router.get("/", async (req, res) =>
  res.render("login", { layout: false, resultMsg: "" })
);

/*
-관리자 계정으로 로그인 성공 이후에 최초로 보여줄 관리자 웹사이트 메인페이지
-반드시 관리자 로그인 성공 후에 접속이 가능합니다
-http://localhost:3001
*/

//isNotLoggedIn,
router.post("/", async (req, res) => {
  var admin_id = req.body.admin_id;
  var password = req.body.password;

  var login_member = await db.Admin.findOne({ where: { admin_id: admin_id } });
  //console.log(admin_id);

  if (login_member) {
    if (await bcrypt.compare(password, login_member.admin_password)) {
      var sessionLoginData = {
        admin_member_id: login_member.admin_member_id,
        company_code: login_member.company_code,
        admin_id: login_member.admin_id,
        admin_name: login_member.admin_name,
      };

      req.session.isLoggedIn = true;
      req.session.loginUser = sessionLoginData;
      console.log("req.session : ", req.session);
      req.session.save(function () {
        return res.redirect("/main");
      });
    } else {
      console.log("req.session 실패?");
      return res.render("login", {
        layout: false,
        resultMsg: "Password not correct.",
      });
    }
  } else {
    return res.render("login", {
      layout: false,
      resultMsg: "Admin member not found.",
    });
  }
});

//isLoggedIn,
router.get("/main", isLoggedIn, checkLoggedIn, async (req, res) => {
  console.log("hi");
  if (req.isAuthenticated() || (req.user && req.user.googleId)) {
    console.log("구글로그인");
    res.render("main", { dateContainerArrow: 0 });
  } else if (req.session.isLoggedIn) {
    console.log("우리디비로로그인");
    res.render("main", { dateContainerArrow: 0 });
  } else res.redirect("/");
});

module.exports = router;
