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

app.get("/", (req, res) => {
    res.send("WELCOME TO THE BLOGS HOMEPAGE");
});

//Catch-all Route
app.get("*", () => console.log("Sorry, page not found! What are you doing with your life?"));

//Listening to routes on the local server
app.listen(port, () => console.log("APP LISTENING ON PORT " + port));