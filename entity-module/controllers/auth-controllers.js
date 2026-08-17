const User = require("../models/user-model");
const generateToken = require("../utils/get-jwt");
const deleteUploadedFile = require("../utils/delete-uploaded-file");
const bcrypt = require("bcryptjs");
 
const signup = async (req, res) => {
    try {
        const user = await User.create({
            ...req.body,
            role: "user",
            imageUrl: req.file ? req.file.filename : "default-user.png",
        });

        const token = generateToken(user);

        user.password = undefined;

        res.status(201).json({
            status: "success",
            message: "User created successfully",
            token,
            data: { user },
        });

    } catch (err) {

        if (req.file) {
            deleteUploadedFile("users", req.file.filename);
        }

        res.status(400).json({
            status: "error",
            message: `Error in signup: ${err.message}`,
        });
    }
};
 
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
 
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "fail", message: "Email and Password are required" });
    }
 
    const user = await User.findOne({ email }).select("+password");
 
    if (!user) {
      return res
        .status(401)
        .json({ status: "fail", message: "Invalid Email or Password" });
    }
 
    const comparePasswords = await bcrypt.compare(password, user.password);
 
    if (!comparePasswords) {
      return res
        .status(401)
        .json({ status: "fail", message: "Invalid Email or Password" });
    }
 
    user.password = undefined;
    const token = generateToken(user);
 
    res.status(200).json({ status: "success", token, data: { user } });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: `Error in signin: ${err.message}`,
    });
  }
};
 
module.exports = {
  signup,
  signin
};