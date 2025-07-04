const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middlewares/auth");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/", auth, userController.getUser);
router.get("/all", auth, userController.getAllUsers);
router.put("/:id", auth, userController.editUser);
router.post("/verify", auth, userController.verifyPassword);
router.delete("/:id", auth, userController.deleteUser);
router.get("/:email", auth, userController.getUserByEmail);
router.get("/find/:id", userController.getUserById);

module.exports = router;
