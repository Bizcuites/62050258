const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.get("/", userController.index);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.delete("/:id", userController.remove);
module.exports = router;
