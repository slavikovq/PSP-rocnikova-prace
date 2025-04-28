const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Enter email and password!" });
    }

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Wrong email or password!" });
    }

    const token = jwt.sign({ userId: user._id, email }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!(firstName && lastName && email && password)) {
      return res
        .status(400)
        .json({ message: "You must fill in all required fields!" });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email is already taken!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id, email }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    res.status(201).json({ token, user: { firstName, lastName, email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).send({ message: "User found!", payload: user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    if (!users) {
      return res.status(404).json({ message: "Users not found!" });
    }

    res.status(200).send({ message: "Users found!", payload: users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).send({ message: "User found!", payload: user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).send({ message: "User found!", payload: user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editUser = async (req, res) => {
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      pfp: req.body.pfp,
      role: req.body.role,
      dataCreated: req.body.dataCreated,
    };

    const result = await User.findByIdAndUpdate(req.params.id, data);

    if (result) {
      return res
        .status(200)
        .send({ message: "User updated!", payload: result });
    }

    res.status(400).send({ message: "Wrong input!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.verifyPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const user = await User.findById(req.user.userId);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Wrong password!" });
    }

    res.status(200).json({ message: "Correct password" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);

    if (result) {
      return res
        .status(200)
        .send({ message: "User deleted!", payload: result });
    }

    res.status(400).send({ message: "Wrong input!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

