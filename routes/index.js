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
    service: process.env.EMAILSERVICE, 
    auth: { 
        user: process.env.EMAIL, 
        pass: process.env.EMAILPASS
    } 
});  

//SENDING NEWSLETTER EMAIL TO GMAIL ACCOUNT
router.post("/newsletter", (req, res) => {
  //saving email input from landing ejs form
  const sender = `${req.body.email}`;

  let mailDetails = { 
    from: sender, 
    to: process.env.EMAIL, 
    subject: 'New sub to newsletter! 🎉',
    //Use proper html tags here to construct a more beautifull email 
    text: `Save ${sender} to newsletter mailing list`
  };

  mailTransporter.sendMail(mailDetails, (err, data) => { 
    if(err) { 
        req.flash("error", "Well, this is embarassing 😅. Email seems down atm. Kindly use our socials to get in touch");
        res.redirect("/");
        console.log(err.message);
        console.log(mailDetails);
    } else { 
        req.flash("success", "Email sent successfully ✅");
        res.redirect("/");
    } 
  });
});

//SENDING 'SEND-US-A-MESSAGE EMAIL TO GMAIL ACCOUNT
router.post("/message", (req, res) => {
  //saving inputs from landing.ejs <send-us-a-message> div to variables
  const sender = `${req.body.email}`;
  const sendersName = `${req.body.name}`;
  //subject is hardcoded in! a bad practice ik, will make it a variable asap
  const subject = "urAfro input | critiques";
  //Use proper html tags here to construct a more beautifull email
  const html = `<h3>Name:  ${sendersName}</h3> <h3>Email: ${sender}</h3> <p>Message: ${req.body.message}</p>`;

  let mailDetails = { 
    from: sender, 
    to: process.env.EMAIL, 
    subject: subject, 
    html: html
  };

  mailTransporter.sendMail(mailDetails, (err, data) => { 
    if(err) { 
        req.flash("error", "Well, this is embarassing 😅. Email seems down atm. Kindly use our socials to get in touch"); 
        res.redirect("/");
    } else { 
        req.flash("success", "Message sent successfully");
        res.redirect("/");
    } 
  });
});

//SENDING 'SUBSCRIBE-TO-PROJECTS-UPDATES' EMAIL TO GMAIL ACCOUNT
router.post("/projects", (req, res) => {
  //saving email input from landing ejs form
  const sender = `${req.body.email}`;

  let mailDetails = { 
    from: sender, 
    to: process.env.EMAIL, 
    subject: 'New sub to projects app updates! 🎉',
    //Use proper html tags here to construct a more beautifull email 
    text: `Save ${sender} to Projects App mailing list`
  };

  mailTransporter.sendMail(mailDetails, (err, data) => { 
    if(err) { 
        req.flash("error", "Well, this is embarassing 😅. Email seems down atm. Kindly use our socials to get in touch");
        res.redirect("/");
    } else { 
        req.flash("success", "Email sent successfully ✅");
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
    avatarUrl: req.body.avatarUrl,
    bio: req.body.bio,
    socials: {
      instagram: req.body.instagram,
      twitter: req.body.twitter
    }
  }), req.body.password, (err, createdUser) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    } else {
      passport.authenticate("local")(req, res, () => {
        console.log(createdUser);
        console.log(createdUser.socials);
        req.flash("success", "Oh hi there " + createdUser.username + "! Glad you joined urafro. Now let's break societ--ahem... build society together!");
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