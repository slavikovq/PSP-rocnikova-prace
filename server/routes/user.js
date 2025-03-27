const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middlewares/auth");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/", auth, userController.getUser);
router.put("/:id", auth, userController.editUser);
router.post("/verify", auth, userController.verifyPassword);


module.exports = router;
