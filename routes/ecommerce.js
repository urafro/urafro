const express = require("express");
const router = express.Router();
const middleware = require("../middleware");

//========================== SME ROUTES ========================

//Index Route - show landing page for sme's
router.get("/sme", (req, res) => {
  res.render("sme/landing");
});

//New Route - store user phone number and reroute them to pricing page
router.post("/sme", (req, res) => {
  //developing just the design for the pricing page minus the phone number collection logic
  res.render("sme/pricing");
});

//show ecommerce plan prices
router.get("/pricing", (req, res) => {
  res.render("sme/pricing");
});

//Index Route - show landing page for retailers
router.get("/retailer", (req, res) => {
  res.render("retailer/landing");
});

//New Route - store user phone number and reroute them to pricing page
router.post("/retailer", (req, res) => {
  req.flash("success", "Hiya. We are still developing the bits. Kindly reach out to us using our phone number +263 772 794 678");
  res.redirect("/projects");
});

//Index Route - show landing page for wholesalers
router.get("/wholesalers", (req, res) => {
  res.render("wholesaler/landing");
});

//New Route - store user phone number and reroute them to pricing page
router.post("/ecommerce/wholesaler", (req, res) => {
  req.flash("success", "Hiya. We are still developing the bits. Kindly reach out to us using our phone number +263 772 794 678");
  res.redirect("/projects");
});

module.exports = router;