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
}