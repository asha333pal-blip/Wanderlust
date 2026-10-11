
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const passport = require("passport");



router.route("/signup")
.get( userController.renderSignupForm)
.post(userController.signup);


router.route("/login")
.get(userController.renderLoginForm)
.post(

    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    userController.login
);
router.get("/logout", userController.logout);
module.exports = router;
