const express = require("express");
const router = express.Router();
const middleware = require("../middleware");

//========================== SME ROUTES ========================

//Index Route - show landing page for sme's
router.get("/ecommerce/sme", (req, res) => {
  res.render("sme/landing");
});

//Index Route - show landing page for retailers
router.get("/ecommerce/retailer", (req, res) => {
  res.render("retailer/landing");
});




module.exports = router;