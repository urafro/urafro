const express = require("express"),
    expressSanitizer = require("express-sanitizer"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    Blog = require("./models/blog"),
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
})

//Listening to routes on the local server
app.listen(port, () => console.log("APP LISTENING ON PORT " + port));