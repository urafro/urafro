const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const nodemailer = require("nodemailer");

//Initial Route - Home ROute
router.get("/", (req, res) => {
  // will come back to style landing page
  res.render("landing");
});

//Projects App Route - placeholder (will develop a more 'cooler' app)
router.get("/projects", (req, res) => {
  res.render("projects");
});

//nodemail SETUP - find a way to save these as environment veriables (the user & pass keys)
let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'tinashydaniel@gmail.com', 
        pass: 'dashel123'
    } 
});  

//SENDING NEWSLETTER EMAIL TO GMAIL ACCOUNT
router.post("/newsletter", (req, res) => {
  //saving email input from landing ejs form
  const sender = `${req.body.newsletter}`;

  let mailDetails = { 
    from: sender, 
    to: 'tinashydaniel@gmail.com', 
    subject: 'Test mail', 
    text: 'Node.js testing mail for GeeksforGeeks'
  };

  mailTransporter.sendMail(mailDetails, (err, data) => { 
    if(err) { 
        req.flash("error", err); 
    } else { 
        req.flash("success", "Email sent successfully");
        res.redirect("/");
    } 
  });
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
    //putting anonymous gender avatar for all new users
    avatarUrl: "https://media.istockphoto.com/vectors/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-vector-id1220827245?k=6&m=1220827245&s=612x612&w=0&h=lPIX54O64ec0ZNcW3_s5RtlJf4sCR9LjLulaK1Y3Z6w=",
    bio: req.body.bio
  }), req.body.password, (err, createdUser) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    } else {
      passport.authenticate("local")(req, res, () => {
        console.log(createdUser)
        req.flash("success", "Oh hi there " + createdUser.username + "! Glad you joined #weRme. Now let's break societ--ahem... build society together!");
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
  req.flash("success", "See ya next time 👋🏽");
  res.redirect("/login");
});

module.exports = router;