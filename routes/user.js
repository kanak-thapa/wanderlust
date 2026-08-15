const express = require("express");
const router = express.Router();
const User = require("../models/user.js")
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userControllers = require("../controllers/users.js");

router.route("/signup")
.get(userControllers.renderSignUpForm)
.post(userControllers.signUp);

//router.get("/signup", userControllers.renderSignUpForm);

//router.post("/signup", wrapAsync(userControllers.signUp));
//shivi 

router.route("/login")
.get(userControllers.renderLoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    //passport.authenticate('local'),
    userControllers.login
);
//router.get("/login",userControllers.renderLoginForm);

// router.post(
//     '/login', 
//     saveRedirectUrl,
//     passport.authenticate("local", {
//         failureRedirect: "/login",
//         failureFlash: true,
//     }),
//     //passport.authenticate('local'),
//     userControllers.login
// );

router.get("/logout", userControllers.loginOut)
module.exports = router;

