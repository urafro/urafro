const express = require("express"),
    expressSanitizer = require("express-sanitizer"),
    session = require("cookie-session"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    Blog = require("./models/blog"),
    Comment = require("./models/comment"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    LocalStrategyMongoose = require("passport-local-mongoose"),
    User = require("./models/user"),
    //figure out how to use moment js to change the date format in index.ejs
    moment = require('moment'),
    seedDB = require("./seeds"),
    port = 8080;

const app = express();

//seeding the database
//seedDB();

//Expecting files from the '/public' dir
app.use(express.static(__dirname + "/public"));
//Setting view engine to EJS
app.set("view engine", "ejs");
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//methodOverride
app.use(methodOverride("_method"));

//Connecting to MongoDB
mongoose.connect("mongodb://localhost:27017/blogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Express-session config
app.use(session({
    secret: "we all need some validation :(",
    saveUninitialized: false,
    resave: false
}));

//Passport config
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Declaring global user variable
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

//Initial Route - Home ROute
app.get("/", (req, res) => {
    // will come back to style landing page
    res.render("landing");
});

//Index Route - Display all blogs
app.get("/blogs", (req, res) => {
    Blog.find({}, (err, foundBlogs) => {
        if(err) {
            console.log("error finding blogs to display: ", err);
        } else {
            res.render("blog/index", {
                foundBlogs: foundBlogs
            });
        }
    })
});

//Create Route - render new blog template
app.get("/blogs/new", (req, res) => {
    res.render("blog/new");
});

//New Route - create new blog
app.post("/blogs", (req, res) => {

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
        }
    }

    Blog.create(newBlog, (err, createdBlog) => {
        if(err) {
            console.log("Error creating new blog", err);
        } else {
            res.redirect("/blogs");
        }
    });

});

//Show Route - show blog with specific id
app.get("/blogs/:id", (req, res) => {
    Blog.find({}, (err, foundBlogs) => {
        if(err) {
            console.log("Error finding blogs", err);
        } else {
            Blog.findById(req.params.id).populate("comments").exec((err, foundBlog) => {
                if(err) {
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
app.get("/blogs/:id/edit", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            console.log("Error finding blog to update", err);
        } else {
            res.render("blog/edit", {
                blog: foundBlog
            });
        }
    });
});

//Update Route - apply blogs edits
app.put("/blogs/:id", (req, res) => {
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
app.delete("/blogs/:id", (req, res) => {
    Blog.findByIdAndDelete(req.params.id, (err, deletedBlog) => {
        if(err) {
            console.log("Error deleting blog", err);
        } else {
            console.log(deletedBlog);
            res.redirect("/blogs");
        }
    });
});

//================== Comment Routes ===================
//New Comment Route - render new comment template
app.get("/blogs/:id/comments/new", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            console.log("Error finding blog to comment on", err);
        } else {
            res.render("comment/new", {
                blog: foundBlog
            });
        }
    });
});

//Create Comment Route - save new comment
app.post("/blogs/:id/comments", (req, res) => {

    //finding the blog to add comment to
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            console.log("Error finding the blog to comment on", err);
        } else {
            //Creating new comment from '/blogs/:id/comments/new' route data
            const newComment = {
                author: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
                },
                text: req.body.commentText
            }

            Comment.create(newComment, (err, createdComment) => {
                if (err) {
                    console.log("Error creating new comment", err);
                } else {
                    foundBlog.comments.push(createdComment);
                    foundBlog.save((err, data) => {
                        if(err) {
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
app.get("/blogs/:id/comments/:comment_id/edit", (req, res) => {

    //find blog to edit comment on
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
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
app.put("/blogs/:id/comments/:comment_id", (req, res) => {
    //updating comment with '/blogs/:id/comments/:comment_id' route data
    const updateComment = {
        author: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
        text: req.body.commentText
    }

    Comment.findByIdAndUpdate(req.params.comment_id, updateComment, (err, updatingComment) => {
        if(err) {
            console.log("Error updating comment", err);
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//Comments Delete Route - delete comment with specific comment id
app.delete("/blogs/:id/comments/:comment_id", (req, res) => {
    Comment.findOneAndDelete(req.params.comment_id, (err, deletedComment) => {
        if(err) {
            console.log("Error finding comment to delete", err);
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//============================== Auth Routes =========================
//register form route
app.get("/signup", (req, res) => {
    res.render("register");
});

//create new user logic
app.post("/signup", (req, res) => {

    User.register(new User({
        username: req.body.username,
        avatarUrl: req.body.avatarUrl,
        bio: req.body.bio
    }), req.body.password, (err, createdUser) => {
        if(err) {
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
app.get("/login", (req, res) => {
    res.render("login");
});

//handling login logic
app.post("/login", passport.authenticate("local", {
    successRedirect: "/blogs",
    failureRedirect: "/login"
}), (req, res) => {

});

//Logout route
app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

//Listening to routes on the local server
app.listen(port, () => console.log("APP LISTENING ON PORT " + port));