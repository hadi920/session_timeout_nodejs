import User from "../models/UserModel.js";

export const userLogin = async (req, res) => {
  const { name, email, password } = req.body;
  const isUser = await User.findOne({ email: email });
  try {
    const newUser = new User({
      name: name,
      email: email,
      password: password,
    });
    await newUser.save();
    res.json({
      message: "user created",
    });
  } catch (error) {
    res.json({
      error,
    });
  }
  if (!isUser) {
  }
};

export const getUser = async (req, res) => {
  res.send("hello");
};
