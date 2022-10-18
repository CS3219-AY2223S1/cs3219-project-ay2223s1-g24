const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Token = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("../utils/email-service");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    res
      .status(503)
      .json(
        "Something went wrong (likely network issue). Could not get users."
      );
    return;
  }
  res
    .status(200)
    .json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json("Invalid inputs passed, please check your data.");
    return;
  }

  const { name, email } = req.body;

  let msg = {};

  const userExists = await User.exists({ name });
  if (userExists) {
    msg["invalidUsername"] = true;
  }

  const emailExists = await User.exists({ email });
  if (emailExists) {
    msg["invalidEmail"] = true;
  }

  if (JSON.stringify(msg) !== "{}") {
    res.status(409).json(msg);
    return;
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(req.body.password, 10);
  } catch (err) {
    res
      .status(409)
      .json(
        "This account already exists (likely) or network issue (unlikely)."
      );
    return;
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  let retrievedResult;
  try {
    retrievedResult = await createdUser.save();
  } catch (err) {
    res
      .status(503)
      .json(
        "Something went wrong while trying to sign up user. likely network error."
      );
    return;
  }

  try {
    const token = await new Token({
      userId: createdUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `${process.env.BASE_URL}users/${createdUser.id}/verify/${token.token}`;
    await sendEmail(
      createdUser.email,
      "Welcome to PeerPrep!",
      createdUser.name,
      url,
      "verification"
    );
    res.status(201).send({
      message: "An Email sent to your account please verify",
      token: token.token,
      userId: createdUser.id,
    });
    return;
  } catch (err) {
    console.log(err);
    res.status(503).json({
      message:
        "Something went wrong while trying to send verification email. likely network error.",
    });
    return;
  }
};

const updatePassword = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json("Invalid inputs passed, please check your data.");
    return;
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    console.log(err);
    res
      .status(503)
      .json(
        "Something went wrong (likely network issue). Could not update user password."
      );
    return;
  }

  if (!existingUser) {
    res.status(404).json("User not found in database to update password.");
    return;
  }

  try {
    comparisonResult = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
  } catch (error) {
    res.status(503).json("Error hashing the password at update password.");
    return;
  }

  if (!comparisonResult) {
    res.status(403).json("Wrong old password. Password not updated.");
    return;
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(req.body.new_password, 10);
  } catch (err) {
    console.log(err);
    res.status(503).json("Error trying to hash password");
    return;
  }

  const updatedUser = new User({
    _id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    password: hashedPassword,
    verified: true,
  });

  let updateResult;
  try {
    updateResult = await User.updateOne(
      { _id: existingUser.id, email: req.body.email },
      updatedUser
    );
  } catch (err) {
    console.log(err);
    res
      .status(503)
      .json("Error trying update user's password. Likely network error.");
    return;
  }

  if (!updateResult) {
    res
      .status(503)
      .json("Unable to update user password. Service unavailable.");
    return;
  }

  let jwtToken;
  try {
    jwtToken = jwt.sign(
      {
        email: updatedUser.email,
        name: updatedUser.name,
      },
      process.env.JWT_KEY,
      { expiresIn: "24h" }
    );
  } catch (err) {
    res
      .status(503)
      .json(
        "Something went wrong while trying create token for signed up user."
      );
    return;
  }

  res.status(200).json({
    message: "User password updated!",
    token: jwtToken,
  });
};

const login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json("Invalid inputs passed, please check your data.");
    return;
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    res
      .status(503)
      .json(
        "Login in failed, likely due to network error. Please try again later."
      );
    return;
  }

  if (!existingUser) {
    res.status(404).json("No such account.");
    return;
  }

  try {
    comparisonResult = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
  } catch (error) {
    res.status(503).json("Error hashing the password at login");
    return;
  }

  if (!comparisonResult) {
    res.status(403).json("Wrong Password");
    return;
  }

  if (!existingUser.verified) {
    let token = await Token.findOne({ userId: existingUser._id });
    if (!token) {
      token = await new Token({
        userId: existingUser._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
      const url = `${process.env.BASE_URL}users/${existingUser.id}/verify/${token.token}`;
      await sendEmail(
        existingUser.email,
        "Welcome to PeerPrep!",
        existingUser.name,
        url,
        "verification"
      );
    }
    return res
      .status(401)
      .json({ message: "An email sent to your account please verify" });
  }

  let jwtToken;
  try {
    jwtToken = jwt.sign(
      {
        email: existingUser.email,
        name: existingUser.name,
      },
      process.env.JWT_KEY,
      { expiresIn: "24h" } //30 seconds
    );
  } catch (err) {
    res
      .status(503)
      .json(
        "Something went wrong while trying create token for signed up user."
      );
    return;
  }

  res.status(200).json({
    message: "Logged in!",
    user: existingUser,
    token: jwtToken,
  });
};

const deleteUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json("Invalid inputs passed, please check your data.");
    return;
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    res
      .status(503)
      .json(
        "Something went wrong (likely network issue). Could not delete user."
      );
    return;
  }

  if (!existingUser) {
    res.status(404).json("User not found in database to delete account.");
    return;
  }

  try {
    comparisonResult = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
  } catch (error) {
    res.status(503).json("Error hashing the password at delete password.");
    return;
  }

  if (!comparisonResult) {
    res.status(400).json("Wrong old password. Account not deleted.");
    return;
  }

  let deleteResult;
  try {
    deleteResult = await User.deleteOne({
      _id: existingUser.id,
      email: req.body.email,
    });
  } catch (err) {
    console.log(err);
    res
      .status(503)
      .json("Error trying delete user from DB. Likely network error.");
    return;
  }

  if (!deleteResult) {
    res.status(503).json("Unable to delete user account. Service unavailable.");
    return;
  }

  res.status(200).json(`Deleted: (email: ${req.body.email})`);
};

const verifyEmail = async (req, res, next) => {
  try {
    User.findById(req.params.id, async function (err, user) {
      if (!user) {
        res.status(404).json({
          message: "Invalid link",
        });
        return;
      }

      if (err) {
        console.log(err);
        res.status(400).json({
          message: "Server error",
        });
        return;
      }

      const token = await Token.findOne({
        userId: req.params.id,
        token: req.params.token,
      });
      if (!token) return res.status(404).send({ message: "Invalid link" });

      user.verified = true;
      user.save(function (err) {
        if (err) {
          console.log(err);
          return res.status(400).send({ message: "Server error" });
        }
      });
      await token.remove();
      res.status(200).send({ message: "Email verified successfully" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const sendPasswordChangeEmail = async (req, res, next) => {
  // Find user by email
  // If it exists => send verification email
  // If error comes, send error

  let existingUser;
  try {
    existingUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    res
      .status(503)
      .json(
        "Something went wrong (likely network issue). Could not find user."
      );
    return;
  }

  if (!existingUser) {
    res.status(404).json("User not found in database");
    return;
  }

  if (!existingUser.verified) {
    res.status(401).json("User has not been verified yet");
    return;
  }

  try {
    let token = await Token.findOne({ userId: existingUser._id });
    if (!token) {
      token = await new Token({
        userId: existingUser._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
      const url = `${process.env.BASE_URL}signin/recovery/${token.token}`;
      // User exists, send email for password change
      await sendEmail(
        existingUser.email,
        "Account Recovery",
        existingUser.name,
        url,
        "account-recovery"
      );
      res.status(200).send({ message: "Password Reset Email sent" });
      return;
    }
  } catch (err) {
    res
      .status(503)
      .json(
        "Something went wrong (likely network issue). Could not delete user."
      );
    return;
  }
};

const resetPasswordViaEmail = async (req, res, next) => {
  try {
    const token = await Token.findOne({
      token: req.body.token,
    });

    if (!token) {
      res.status(404).json("Token not found");
      return;
    }

    const existingUser = await User.findOne({ _id: token.userId });

    if (!existingUser) {
      res.status(404).json("User not found");
      return;
    }

    // Change password

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(req.body.password, 10);
    } catch (err) {
      console.log(err);
      res.status(503).json("Error trying to hash password");
      return;
    }

    const updatedUser = new User({
      _id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      password: hashedPassword,
      verified: true,
    });

    let updateResult;
    try {
      updateResult = await User.updateOne(
        { _id: existingUser.id, email: existingUser.email },
        updatedUser
      );
      await token.remove();
      res.status(200).json("Changed Password Successfully");
    } catch (err) {
      console.log(err);
      res
        .status(503)
        .json("Error trying update user's password. Likely network error.");
      return;
    }

    if (!updateResult) {
      res
        .status(503)
        .json("Unable to update user password. Service unavailable.");
      return;
    }
  } catch (err) {
    res
      .status(503)
      .json(
        "Something went wrong (likely network issue). Could not delete user."
      );
    return;
  }
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
exports.deleteUser = deleteUser;
exports.updatePassword = updatePassword;
exports.verifyEmail = verifyEmail;
exports.sendPasswordChangeEmail = sendPasswordChangeEmail;
exports.resetPasswordViaEmail = resetPasswordViaEmail;
