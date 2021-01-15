const express = require("express"),
    expressSanitizer = require("express-sanitizer"),
    session = require("cookie-session"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    Blog = require("./routes/blog"),
    Comment = require("./routes/comment"),
    passport = require("passport"),
    index = require("./routes/index"),
    LocalStrategy = require("passport-local"),
    LocalStrategyMongoose = require("passport-local-mongoose"),
    User = require("./models/user"),
    flash = require("connect-flash"),
    nodemailer = require("nodemailer"),
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
//Setting up flash messages
app.use(flash());

mongoose.connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.log("ERROR", err.message);
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

//Declaring global variables
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/blogs", Blog);
app.use("/blogs/:id/comments", Comment);
app.use(index);

//Listening to routes on heroku server
app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("SERVER STARTED!!");
});