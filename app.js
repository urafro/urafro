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

app.get("/", (req, res) => {
    res.render("landing");
});

//Catch-all Route
app.get("*", () => console.log("Sorry, page not found! What are you doing with your life?"));

//Listening to routes on the local server
app.listen(port, () => console.log("APP LISTENING ON PORT " + port));