
const express = require("express");
const authController = require("../Controllers/authController");
const router = express. Router();
router.get("/alltoken", authController.alltoken);
router.post("/createoken", authController.addToken);
module.exports = router;
