const express = require("express");
const router = express.Router();

const { sendEmail } = require("../app");

router.post("/sendEmail", sendEmail);

module.exports = router;