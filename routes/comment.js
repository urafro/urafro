const express = require("express");
const router = express.Router({mergeParams: true});
const Blog = require("../models/blog");
const Comment = require("../models/comment");
const middleware = require("../middleware");

//================== Comment Routes ===================
//New Comment Route - render new comment template
router.get("/new",middleware.isLoggedIn, (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      console.log("Error finding blog to comment on", err);
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
      console.log("Error finding the blog to comment on", err);
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
          console.log("Error creating new comment", err);
        } else {
          foundBlog.comments.push(createdComment);
          foundBlog.save((err, data) => {
            if (err) {
              console.log("Error saving comment to blog", err);
            } else {
              console.log(data);
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
      console.log("Error finding blog to edit comment on", err);
    } else {
      //find specific comment to edit
      Comment.findById(req.params.comment_id, (err, foundComment) => {
        if (err) {
          console.log("Error finding comment to edit", err);
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
    author: {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    },
    text: req.body.commentText
  }

  Comment.findByIdAndUpdate(req.params.comment_id, updateComment, (err, updatingComment) => {
    if (err) {
      console.log("Error updating comment", err);
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

//Comments Delete Route - delete comment with specific comment id
router.delete("/:comment_id",middleware.checkCommentOwnership, (req, res) => {
  Comment.findByIdAndDelete(req.params.comment_id, (err, deletedComment) => {
    if (err) {
      console.log("Error finding comment to delete", err);
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

module.exports = router;