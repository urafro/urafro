const Blog = require("../models/blog");
const Comment = require("../models/comment");
//Middleware object - all middleware goes here
let middlewareObj = {};

//Middleware to check blog ownership 
middlewareObj.checkBlogOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Blog.findById(req.params.id, (err, foundBlog) => {
      if (err) {
        console.log("Error finding blog", err);
      } else {
        if (req.user._id.equals(foundBlog.author.id)) {
          next();
        } else {
          res.send("You don't have authorization to do that!");
        }
      }
    })
  } else {
    res.send("You need to be logged in to do that")
  }
}

//Middleware to check comment ownership
middlewareObj.checkCommentOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
      if (err) {
        console.log("Error finding comment", err);
      } else {
        if (foundComment.author.id.equals(req.user._id)) {
          next();
        }
      }
    });
  } else {
    res.send("You need to be logged in to do that!");
  }
}

//middleware to check whether user is logged in 
middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.send("You need to be logged in to do that");
  }
}

module.exports = middlewareObj;