const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    port = 8080;

//Expecting files from the '/public' dir
app.use(express.static("public"));
//Setting view engine to EJS
app.set("view engine", "ejs");
//bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
//methodOverride
app.use(methodOverride("_method"));

//Connecting to MongoDB
mongoose.connect("mongodb://localhost:27017/blogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Defining Schemas
let BlogSchema = new mongoose.Schema({
    title: String,
    image: String,
    desc: String
});

let Blog = new mongoose.model("Blog", BlogSchema);

//Initial Route - Home ROute
app.get("/", (req, res) => {
    res.render("landing");
});

//Index Route - Show all Blogs
app.get("/blogs", (req, res) => {
    Blog.find({}, (err, foundBlogs) => {
        if (err) {
            console.log("error finding blogs in database :" + err);
        } else {
            //console.log(foundBlogs);
            res.render("index", {
                foundBlogs: foundBlogs
            });
        }
    });
});

//New Route - serve the add-new-blog form
app.get("/blogs/new", (req, res) => {
    res.render("new");
});

//Create Route - add new blog to database
app.post("/blogs", (req, res) => {
    let newBlog = req.body.blog;

    Blog.create(newBlog, (err, createdBlog) => {
        if (err) {
            console.log("error creating blog :" + err);
        } else {
            res.redirect("/blogs");
            //console.log(createdBlog);
        }
    });
});

//Show

//Catch-all Route
app.get("*", () => console.log("Sorry, page not found! What are you doing with your life?"));

//Listening to routes on the local server
app.listen(port, () => console.log("APP LISTENING ON PORT " + port));