const User = require("../Model/user");
const jwt = require("jsonwebtoken");

exports.index = async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({
    message: "Successfully Loaded",
    data: user,
  });
};

exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  const user = new User({
    username: username,
    password: password,
  });
  await user.save();
  res.status(200).json({
    message: "Successfully Register",
  });
};
exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) {
    res.status(404).json({
      message: "No User Founded",
    });
  }

  if (user.password !== password) {
    res.status(404).json({
      message: "Password Not Match",
    });
  }
  const token = await jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    "your-id-password-will-expires_in-sec-min",
    { expiresIn: "30 days" }
  );
  const expires_in = jwt.decode(token);
  return res.status(200).json({
    access_token: token,
    expires_in: expires_in.exp,
    token_type: "Bearer",
    data: user,
  });
  //   res.status(200).json({
  //     message: "Successfully Login",
  //   });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.status(200).json({
    message: "Successfully Removed User",
  });
};
