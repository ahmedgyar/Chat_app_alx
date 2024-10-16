const express = require("express");
const { createChat, findChat, findUserChat } = require("../controlers/Chat_controller");

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findUserChat);
router.get("/find/:firstId/:secondId", findChat);


module.exports = router;