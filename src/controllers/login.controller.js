const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const register = async (req, res) => {
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    password: encryptedPassword,
  });

  res.json({ user: user.id });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(">>> user", user);
  const isRightPassword = await bcrypt.compare(password, user?.password);

  if (!isRightPassword) {
    return res.status(400).send("Invalid user or password.");
  }

  const token = jwt.sign({ user: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return res.json(token);
};

module.exports = {
  register,
  login,
};
