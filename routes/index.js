const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

//Initial Route - Home ROute
router.get("/", (req, res) => {
  // will come back to style landing page
  res.render("landing");
});

//============================== Auth Routes =========================
//register form route
router.get("/signup", (req, res) => {
  res.render("register");
});

//create new user logic
router.post("/signup", (req, res) => {

  User.register(new User({
    username: req.body.username,
    avatarUrl: req.body.avatarUrl,
    bio: req.body.bio
  }), req.body.password, (err, createdUser) => {
    if (err) {
      console.log("Error creating new user", err);
    } else {
      passport.authenticate("local")(req, res, () => {
        console.log(createdUser)
        res.redirect("/blogs");
      });
    }
  });
});

//login form route
router.get("/login", (req, res) => {
  res.render("login");
});

//handling login logic
router.post("/login", passport.authenticate("local", {
  successRedirect: "/blogs",
  failureRedirect: "/login"
}), (req, res) => {

});

//Logout route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;