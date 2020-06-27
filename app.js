const express = require("express"),
    expressSanitizer = require("express-sanitizer"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    Blog = require("./models/blog"),
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

//Show route
app.get("/blogs/:id", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            console.log("Error finding blog to show", err);
        } else {
            res.render("blog/show", {
                blog: foundBlog
            });
        }
    });
});

//Listening to routes on the local server
app.listen(port, () => console.log("APP LISTENING ON PORT " + port));