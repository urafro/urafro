const express = require("express");
const router = express.Router();
const middleware = require("../middleware");

//========================== SME ROUTES ========================

//Index Route - show landing page for sme's
router.get("/sme", (req, res) => {
  res.send("Welcome to urafro's sme landing page");
});



module.exports = router;