const post = require("../models/post");
const Post = require("../models/post");

exports.getAllPosts = async (req, res) => {
  try {
    const data = await Post.find();

    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "Posts found!",
        payload: data,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUserPosts = async (req, res) => {
  try {
    const data = await Post.find({ creator: req.user.userId });

    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "Posts found!",
        payload: data,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);

    if (data) {
      return res.status(200).send({
        message: "Post found!",
        payload: data,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const data = new Post({
      title: req.body.title,
      creator: req.body.creator,
      content: req.body.content,
    });

    const result = await data.save();

    if (result) {
      return res.status(201).send({
        message: "Post created!",
        payload: result,
      });
    }

    res.status(400).send({
      message: "Wrong input!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      creator: req.body.creator,
      content: req.body.content,
    };

    const result = await Post.findByIdAndUpdate(req.params.id, data);

    if (result) {
      return res.status(200).send({
        message: "Post updated!",
        payload: result,
      });
    }

    res.status(400).send({
      message: "Wrong input!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      creator: req.body.creator,
      content: req.body.content,
    };

    const result = await Post.findByIdAndDelete(req.params.id, data);

    if (result) {
      return res.status(200).send({
        message: "Post deleted!",
        payload: result,
      });
    }

    res.status(400).send({
      message: "Wrong input!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.likePost = async (req, res) => {
  try {
    const userId = req.body.userId;
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found!" });

    if (post.isDisliked.includes(userId)) post.isDisliked.pull(userId);

    if (post.isLiked.includes(userId)) {
      post.isLiked.pull(userId);
    } else {
      post.isLiked.push(userId);
    }

    await post.save();
    res.status(200).json(post);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.dislikePost = async (req, res) => {
  try {
    const userId = req.body.userId;
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found!" });

    if (post.isLiked.includes(userId)) post.isLiked.pull(userId);

    if (post.isDisliked.includes(userId)) {
      post.isDisliked.pull(userId);
    } else {
      post.isDisliked.push(userId);
    }

    await post.save();
    res.status(200).json(post);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
