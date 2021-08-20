const Blog = require("../models/blog");
const Comment = require("../models/comment");
//Middleware object - all middleware goes here
let middlewareObj = {};

//Middleware to check blog ownership 
middlewareObj.checkBlogOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Blog.findById(req.params.id, (err, foundBlog) => {
      if (err) {
        req.flash("error", err.message);
        res.redirect("back");
      } else {
        if (req.user._id.equals(foundBlog.author.id)) {
          next();
        } else {
          req.flash("error", "Who else knows you're here mate? Tell us if you find a vulnerability in our security ;)");
          res.redirect("back");
        }
      }
    })
  } else {
    req.flash("error", "We're usually not such a tease but kindly login first to perform that task 😄");
    res.redirect("/login");
  }
}

//Middleware to check comment ownership
middlewareObj.checkCommentOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
      if (err) {
        req.flash("error", err.message);
        res.redirect("back");
      } else {
        if (foundComment.author.id.equals(req.user._id)) {
          next();
        }
      }
    });
  } else {
    req.flash("error", "We're usually not such a tease but kindly login first to perform that task 😄");
    res.redirect("/login");
  }
}

//middleware to check whether user is logged in 
middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("error", "We're usually not such a tease but kindly login first to perform that task 😄");
    res.redirect("/login");
  }
}

//middleware to check whether a user has admin privileges or not
middlewareObj.isAdmin = function(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    return next();
  } else {
    req.flash("error", "Kindly contact the admin to perfom that task");
    res.redirect("back");
  }
}

module.exports = middlewareObj;