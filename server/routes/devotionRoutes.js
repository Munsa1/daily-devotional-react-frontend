const express = require("express");
const { saveDevotion, getLatestDevotion } = require("../controllers/devotionController.js");
const router = express.Router();

router.post("/", saveDevotion);
router.get("/latest", getLatestDevotion);

module.exports = router;
