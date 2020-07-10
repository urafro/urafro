const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

//================================ BLOG ROUTES ===============================

//Index Route - Display all blogs
router.get("/", (req, res) => {
  Blog.find({}, (err, foundBlogs) => {
    if (err) {
      console.log("error finding blogs to display: ", err);
    } else {
      res.render("blog/index", {
        foundBlogs: foundBlogs
      });
    }
  })
});

//Create Route - render new blog template
router.get("/new",isLoggedIn, (req, res) => {
  res.render("blog/new");
});

//New Route - create new blog
router.post("/",isLoggedIn, (req, res) => {

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
      avatarUrl: req.user.avatarUrl
    }
  }

  Blog.create(newBlog, (err, createdBlog) => {
    if (err) {
      console.log("Error creating new blog", err);
    } else {
      res.redirect("/blogs");
    }
  });

});

//Show Route - show blog with specific id
router.get("/:id", (req, res) => {
  Blog.find({}, (err, foundBlogs) => {
    if (err) {
      console.log("Error finding blogs", err);
    } else {
      Blog.findById(req.params.id).populate("comments").exec((err, foundBlog) => {
        if (err) {
          console.log("Error finding specific blog to show", err);
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
router.get("/:id/edit",checkBlogOwnership, (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      console.log("Error finding blog to update", err);
    } else {
      res.render("blog/edit", {
        blog: foundBlog
      });
    }
  });
});

//Update Route - apply blogs edits
router.put("/:id",checkBlogOwnership, (req, res) => {
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
      console.log("Error updating blog", err);
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

//Destroy Route - delete blog with specific id
router.delete("/:id",checkBlogOwnership, (req, res) => {
  Blog.findByIdAndDelete(req.params.id, (err, deletedBlog) => {
    if (err) {
      console.log("Error deleting blog", err);
    } else {
      console.log(deletedBlog);
      res.redirect("/blogs");
    }
  });
});

//Middleware to check blog ownership
function checkBlogOwnership (req, res, next) {
  if(req.isAuthenticated()) {
    Blog.findById(req.params.id, (err, foundBlog) => {
      if(err) {
        console.log("Error finding blog", err);
      } else {
        if(req.user._id.equals(foundBlog.author.id)) {
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

//Middleware to check whether or not a use is logged in
function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.send("You need to be logged in to do that");
  }
}

module.exports = router;