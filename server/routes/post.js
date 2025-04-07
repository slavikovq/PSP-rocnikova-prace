const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const auth = require("../middlewares/auth");

router.get("/", postController.getAllPosts);
router.get("/user-post", auth, postController.getAllUserPosts);
router.get("/:id", postController.getPostById);
router.post("/", auth, postController.createPost);
router.put("/:id", auth, postController.updatePost);
router.put("/:id/like", auth, postController.likePost)
router.put("/:id/dislike", auth, postController.dislikePost)
router.delete("/:id", auth, postController.deletePost);

module.exports = router;
