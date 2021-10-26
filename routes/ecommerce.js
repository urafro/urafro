const express = require("express");
const router = express.Router();
const middleware = require("../middleware");

//========================== SME ROUTES ========================

//Index Route - show landing page for sme's
router.get("/ecommerce/sme", (req, res) => {
  res.render("sme/landing");
});

//New Route - store user phone number and reroute them to pricing page
router.post("/ecommerce/sme", (req, res) => {
  req.flash("success", "Hiya. We are still developing the bits. Kindly reach out to us using our phone number +263 772 794 678");
  res.redirect("/projects");
});

//Index Route - show landing page for retailers
router.get("/ecommerce/retailer", (req, res) => {
  res.render("retailer/landing");
});

//New Route - store user phone number and reroute them to pricing page
router.post("/ecommerce/retailer", (req, res) => {
  req.flash("success", "Hiya. We are still developing the bits. Kindly reach out to us using our phone number +263 772 794 678");
  res.redirect("/projects");
});


module.exports = router;