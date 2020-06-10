const express = require("express"),
    expressSanitizer = require("express-sanitizer"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    port = 8080;

const app = express();

//Expecting files from the '/public' dir
app.use(express.static(__dirname + "public"));
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
    res.render("landing");
});

//Catch-all Route
app.get("*", () => console.log("Sorry, page not found! What are you doing with your life?"));

//Listening to routes on the local server
app.listen(port, () => console.log("APP LISTENING ON PORT " + port));