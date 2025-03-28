import User from "../model/Users.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const createdUser = new User({
      name: name,
      email: email,
      password: hashPass,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    } else {
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
