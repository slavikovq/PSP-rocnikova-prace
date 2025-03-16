const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middlewares/auth");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/", auth, userController.getUser);

module.exports = router;
