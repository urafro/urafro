const express = require("express");
const router = express.Router();
const middleware = require("../middleware");

//========================== SME ROUTES ========================

//Index Route - show landing page for sme's
router.get("/retailer", (req, res) => {
  res.render("retailer/landing");
});



module.exports = router;