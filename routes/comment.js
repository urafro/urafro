const express = require("express");
const router = express.Router({mergeParams: true});
const Blog = require("../models/blog");
const Comment = require("../models/comment");
const Reply = require("../models/reply");
const middleware = require("../middleware");

//================== Comment Routes ===================
//New Comment Route - render new comment template
router.get("/new",middleware.isLoggedIn, (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs/" + req.params.id);
    } else {
      res.render("comment/new", {
        blog: foundBlog
      });
    }
  });
});

//Create Comment Route - save new comment
router.post("/",middleware.isLoggedIn, (req, res) => {

  //finding the blog to add comment to
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs/" + req.params.id);
    } else {
      //Creating new comment from '/blogs/:id/comments/new' route data
      const newComment = {
        author: {
          id: req.user._id,
          username: req.user.username,
          avatarUrl: req.user.avatarUrl
        },
        text: req.body.commentText
      }

      Comment.create(newComment, (err, createdComment) => {
        if (err) {
          req.flash("error", err.message);
          res.redirect("/blogs/" + req.params.id);
        } else {
          foundBlog.comments.push(createdComment);
          foundBlog.save((err, data) => {
            if (err) {
              req.flash("error", err.message);
              res.redirect("/blogs/" + req.params.id);
            } else {
              req.flash("success", "Comment posted!");
              res.redirect("/blogs/" + req.params.id);
            }
          });
        }
      });
    }
  });
});

//Edit Route - show comment edit template
router.get("/:comment_id/edit",middleware.checkCommentOwnership, (req, res) => {

  //find blog to edit comment on
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs/" + req.params.id);
    } else {
      //find specific comment to edit
      Comment.findById(req.params.comment_id, (err, foundComment) => {
        if (err) {
          req.flash("error", err.message);
          res.redirect("/blogs/" + req.params.id);
        } else {
          res.render("comment/edit", {
            comment: foundComment,
            blog: foundBlog
          });
        }
      });
    }
  });
});

//Comments Update Route - update the comment with data from the route above
router.put("/:comment_id",middleware.checkCommentOwnership, (req, res) => {
  //updating comment with '/blogs/:id/comments/:comment_id' route data
  const updateComment = {
    text: req.body.commentText
  }

  Comment.findByIdAndUpdate(req.params.comment_id, updateComment, (err, updatingComment) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs/" + req.params.id);
    } else {
      req.flash("success", "Comment updated!");
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

//Comments Delete Route - delete comment with specific comment id
router.delete("/:comment_id",middleware.checkCommentOwnership, (req, res) => {
  Comment.findByIdAndDelete(req.params.comment_id, (err, deletedComment) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs/" + req.params.id);
    } else {
      req.flash("success", "Comment Deleted!");
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

//Comment Replies - Serve new reply form
router.get("/:comment_id/replies/new", (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if(err) {
      console.log("Error finding blog to reply comments on", err);
    } else {
      Comment.findById(req.params.comment_id, (err, foundComment) => {
        if(err) {
          console.log("Error finding comment to reply to", err);
        } else {
          res.render("comment/reply", {
            blog: foundBlog,
            comment: foundComment
          });
        }
      });
    }
  });
});

//Comment Replies - Create reply with '/replies/new' form data
router.post("/:comment_id/replies", (req, res) => {
  Comment.findById(req.params.comment_id, (err, foundComment) => {
    if(err) {
      console.log("Error finding comment to reply to", err);
    } else {

      const newReply = {
        author: {
          id: req.user._id,
          username: req.user.username 
        },
        avatarUrl: req.user.avatarUrl,
        text: req.body.text
      }

      Reply.create(newReply, (err, reply) => {
        if(err) {
          console.log("error creating a reply to comment", err.message);
        } else {
          foundComment.replies.push(reply);
          foundComment.save();
          console.log("===============");
          console.log(reply);
          console.log("===============");
          console.log(foundComment);

          res.redirect("/blogs/" + req.params.id);
        }
      });

    };
  });
});

module.exports = router;