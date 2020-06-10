const express = require("express"),
    app = express(),
    expressSanitizer = require("express-sanitizer"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    port = 8080;

//Expecting files from the '/public' dir
app.use(express.static("public"));
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

//Defining Schemas
let BlogSchema = new mongoose.Schema({
    tag: String,
    body: {
        header: {
            mainHeading: String,
            mainImage: String
        },
        content : {
            // [introParagraph] div goes directly below the main heading with text-muted
            introParagraph: String,
            sectionOne: {
                paragraphOne: String,
                paragraphTwo: String
            },
            
            sectionTwo: {
                smallHeading: String,
                // [paragraphOne] first sentence will be styled "italically" by applying a class to it with css
                paragraphOne: String,
                // [highlightedParagraph] div has border to the left
                highlightedParagraph: String,
                paragraphThree: String
            },
            sectionThree: {
                // [smallHeading] here is even smaller than that of section 2 in font-size
                smallHeading: String,
                // [paragraphOne] is a numbered div
                paragraphOne: String,
                paragraphTwo: String,
                smallHeading: String,
                // [paragraphThree] div is a list-style type div
                paragraphThree: String,
                blogImage: String,
                blogImageDescription: String,
                paragraphFour: String
            },
            // [sectionFour] div is the conclusion
            sectionFour: {
                smallHeading: String,
                paragraphOne: String
            }
        }
        
    }    

});

let Blog = new mongoose.model("Blog", BlogSchema);

//Initial Route - Home ROute
app.get("/", (req, res) => {
    res.render("landing");
});

//Catch-all Route
app.get("*", () => console.log("Sorry, page not found! What are you doing with your life?"));

//Listening to routes on the local server
app.listen(port, () => console.log("APP LISTENING ON PORT " + port));