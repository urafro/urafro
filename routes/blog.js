const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const Draft = require("../models/draft");
const middleware = require("../middleware");

//================================ BLOG ROUTES ===============================

//Index Route - Display all blogs
router.get("/", (req, res) => {
  Blog.find({}, (err, foundBlogs) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/");
    } else {
      res.render("blog/index", {
        foundBlogs: foundBlogs
      });
    }
  })
});

//Create Route - render new blog template
router.get("/new",middleware.isLoggedIn, (req, res) => {
  res.render("blog/new");
});

//New Route - create new blog
router.post("/",middleware.isLoggedIn, (req, res) => {

  const newBlog = {
    tag: req.body.blog.tag,
    body: {
      header: {
        mainHeading: req.body.blog.mainHeading,
        mainImage: req.body.blog.mainImage
      },
      content: {
        introParagraph: req.body.blog.introParagraph,
        sectionOne: {
          paragraphOne: req.body.blog.paragraphOne,
          paragraphTwo: req.body.blog.paragraphTwo
        },

        sectionTwo: {
          mediumHeading: req.body.blog.mediumHeading,
          paragraphThree: req.body.blog.paragraphThree,
          paragraphFour: req.body.blog.paragraphFour,
          paragraphFive: req.body.blog.paragraphFive
        },
        sectionThree: {
          smallHeading: req.body.blog.smallHeading,
          paragraphSix: req.body.blog.paragraphSix,
          paragraphSeven: req.body.blog.paragraphSeven,
          smallerHeading: req.body.blog.smallerHeading,
          paragraphEight: req.body.blog.paragraphEight,
          blogImage: req.body.blog.blogImage,
          blogImageDescription: "blog image description :|",
          paragraphNine: req.body.blog.paragraphNine
        },
        sectionFour: {
          smallestHeading: req.body.blog.smallestHeading,
          lastParagraph: req.body.blog.lastParagraph
        }
      }
    },
    author: {
      id: req.user._id,
      username: req.user.username,
      avatarUrl: req.user.avatarUrl,
      bio: req.user.bio
    }
  }

  Blog.create(newBlog, (err, createdBlog) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs/new");
    } else {
      req.flash("success", "Blog Successfully Published! 🎉")
      res.redirect("/blogs");
    }
  });

});

//Show Route - show blog with specific id
router.get("/:id", (req, res) => {
  Blog.find({}, (err, foundBlogs) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs");
    } else {
      Blog.findById(req.params.id).populate([
        {
          path: "comments",
          model: "Comment",
          populate: {
            path: "replies",
            model: "Reply"
          }
        }
    ]).exec((err, foundBlog) => {
        if (err) {
          req.flash("error", err.message);
          res.redirect("/blogs");
        } else {

          //collecting blogs with similar tag to display in show route template
          const allBlogs = foundBlogs;
          const taggedBlogs = [];
          const mySearchValue = foundBlog.tag;

          for (let i = 0; i < allBlogs.length; i++) {
            //excluding the current blog from blogs with the same tag
            if (allBlogs[i].tag == mySearchValue && allBlogs[i].id != foundBlog.id) {
              taggedBlogs.push(allBlogs[i]);
            }
          }

          res.render("blog/show", {
            blog: foundBlog,
            taggedBlogs: taggedBlogs
          });
        }
      });
    }
  });
});

//Edit Route - show edit blog template
router.get("/:id/edit",middleware.checkBlogOwnership, (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs");
    } else {
      res.render("blog/edit", {
        blog: foundBlog
      });
    }
  });
});

//Update Route - apply blogs edits
router.put("/:id",middleware.checkBlogOwnership, (req, res) => {

  let trimInputs = Object.values(req.body.blog);

  //removing unnecessary white space from inputs
  for (let t of trimInputs) {
    t.trim();
  }

  const updateBlog = {
    tag: req.body.blog.tag,
    body: {
      header: {
        mainHeading: req.body.blog.mainHeading,
        mainImage: req.body.blog.mainImage
      },
      content: {
        introParagraph: req.body.blog.introParagraph,
        sectionOne: {
          paragraphOne: req.body.blog.paragraphOne,
          paragraphTwo: req.body.blog.paragraphTwo
        },

        sectionTwo: {
          mediumHeading: req.body.blog.mediumHeading,
          paragraphThree: req.body.blog.paragraphThree,
          paragraphFour: req.body.blog.paragraphFour,
          paragraphFive: req.body.blog.paragraphFive
        },
        sectionThree: {
          smallHeading: req.body.blog.smallHeading,
          paragraphSix: req.body.blog.paragraphSix,
          paragraphSeven: req.body.blog.paragraphSeven,
          smallerHeading: req.body.blog.smallerHeading,
          paragraphEight: req.body.blog.paragraphEight,
          blogImage: req.body.blog.blogImage,
          blogImageDescription: "blog image description :|",
          paragraphNine: req.body.blog.paragraphNine
        },
        sectionFour: {
          smallestHeading: req.body.blog.smallestHeading,
          lastParagraph: req.body.blog.lastParagraph
        }
      }
    }
  }

  //updating blog with data from edit route template
  Blog.findByIdAndUpdate(req.params.id, updateBlog, (err, updatedBlog) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs/" + req.params.id);
    } else {
      req.flash("success", "Blog Updated successfully! 🚧");
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

//Destroy Route - delete blog with specific id
router.delete("/:id",middleware.checkBlogOwnership, (req, res) => {
  Blog.findByIdAndDelete(req.params.id, (err, deletedBlog) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs/" + req.params.id);
    } else {
      console.log(deletedBlog);
      req.flash("success", "⛔️ Blog DELETED successfully! ⛔️")
      res.redirect("/blogs");
    }
  });
});

/* Blog Draft Routes */

//Use data from blog new get route - create new blog or save it as draft instead
router.post("/drafts",middleware.isLoggedIn, (req, res) => {

  const newDraft = {
    tag: req.body.blog.tag,
    body: {
      header: {
        mainHeading: req.body.blog.mainHeading,
        mainImage: req.body.blog.mainImage
      },
      content: {
        introParagraph: req.body.blog.introParagraph,
        sectionOne: {
          paragraphOne: req.body.blog.paragraphOne,
          paragraphTwo: req.body.blog.paragraphTwo
        },

        sectionTwo: {
          mediumHeading: req.body.blog.mediumHeading,
          paragraphThree: req.body.blog.paragraphThree,
          paragraphFour: req.body.blog.paragraphFour,
          paragraphFive: req.body.blog.paragraphFive
        },
        sectionThree: {
          smallHeading: req.body.blog.smallHeading,
          paragraphSix: req.body.blog.paragraphSix,
          paragraphSeven: req.body.blog.paragraphSeven,
          smallerHeading: req.body.blog.smallerHeading,
          paragraphEight: req.body.blog.paragraphEight,
          blogImage: req.body.blog.blogImage,
          blogImageDescription: "blog image description :|",
          paragraphNine: req.body.blog.paragraphNine
        },
        sectionFour: {
          smallestHeading: req.body.blog.smallestHeading,
          lastParagraph: req.body.blog.lastParagraph
        }
      }
    },
    author: {
      id: req.user._id,
      username: req.user.username,
      avatarUrl: req.user.avatarUrl,
      bio: req.user.bio
    }
  }

  Draft.create(newDraft, (err, createdDraft) => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs/new");
    } else {
      req.flash("success", "Draft stored in a cool place! 🎉")
      res.redirect("/blogs");
      console.log(createdDraft);
    }
  });

});

module.exports = router;