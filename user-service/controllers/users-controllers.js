const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const User = require('../models/user');

// GET
const getUsers = async (req, res, next) => {

  console.log(req.userData)

  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    res.status(503).json('Something went wrong (likely network issue). Could not get users.');
    return;
  }
  res.status(200).json({ users: users.map(user => user.toObject({ getters: true })) });
};


// POST
const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json('Invalid inputs passed, please check your data.');
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
    res.status(409).json("This account already exists (likely) or network issue (unlikely).");
    return
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword
  });

  let retrievedResult;
  try {
    
    retrievedResult = await createdUser.save()
  
  } catch (err) {
    res.status(503).json('Something went wrong while trying to sign up user. likely network error.');
    return;
  }

  let jwtToken;
  try {
    jwtToken = jwt.sign(
      {
        email: createdUser.email,
        name: createdUser.name,
      },
      process.env.JWT_KEY,
      { expiresIn: 30 }
    );
  } catch (err) {
    res.status(503).json('Something went wrong while trying create token for signed up user.');
    return;
  }

  res.status(201).json({
    message: "Signup done!",
    result: retrievedResult,
    token: jwtToken
  })
};

// PUT
const updatePassword = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json('Invalid inputs passed, please check your data.');
    return;
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    console.log(err)
    res.status(503).json('Something went wrong (likely network issue). Could not user update user password.');
    return;
  }

  if (!existingUser) {
    res.status(404).json("User not found in database to update password.")
    return;
  }

  try {
    comparisonResult = await bcrypt.compare(req.body.password, existingUser.password)
  } catch (error) {
    res.status(503).json("Error hashing the password at update password.")
    return;
  }

  if (!comparisonResult) {
    res.status(403).json('Wrong old password. Password not updated.');
    return;
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(req.body.new_password, 10)
  } catch (err) {
    console.log(err)
    res.status(503).json("Error trying to hash password");
    return;
  }

  const updatedUser = new User({
    _id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    password: hashedPassword,
  })
  
  let updateResult;
  try {
    updateResult = await User.updateOne(
      { _id: existingUser.id, email: req.body.email },
      updatedUser
    )
  } catch (err) {
    console.log(err)
    res.status(503).json("Error trying update user's password. Likely network error.");
    return;
  }

  if (!updateResult) {
    res.status(503).json("Unable to update user password. Service unavailable.");
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
      { expiresIn: 30 }
    );
  } catch (err) {
    res.status(503).json('Something went wrong while trying create token for signed up user.');
    return;
  }

  res.status(200).json({
    message: "User password updated!",
    token: jwtToken
  });
};


// POST
const login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json('Invalid inputs passed, please check your data.');
    return;
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    res.status(503).json('Login in failed, likely due to network error. Please try again later.')
    return;
  }

  if (!existingUser) {
    res.status(401).json('No such account.');
    return;
  }

  try {
    comparisonResult = await bcrypt.compare(req.body.password, existingUser.password)
  } catch (error) {
    res.status(503).json("Error hashing the password at login")
    return;
  }

  if (!comparisonResult) {
    res.status(403).json('Wrong Password');
    return;
  }

  let jwtToken;
  try {
    jwtToken = jwt.sign(
      {
        email: existingUser.email,
        name: existingUser.name,
      },
      process.env.JWT_KEY,
      // { expiresIn: "24h" }
      { expiresIn: 30 } //30 seconds
    );
  } catch (err) {
    res.status(503).json('Something went wrong while trying create token for signed up user.');
    return;
  }

  res.status(200).json({
    message: 'Logged in!',
    user: existingUser,
    token: jwtToken
  });
};


// DELETE
const deleteUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json('Invalid inputs passed, please check your data.');
    return;
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    // console.log(err)
    res.status(503).json('Something went wrong (likely network issue). Could not delete user.');
    return;
  }

  if (!existingUser) {
    res.status(404).json("User not found in database to delete account.")
    return;
  }

  let comparisonResult;
  try {
    comparisonResult = await bcrypt.compare(req.body.password, existingUser.password)
  } catch (error) {
    res.status(503).json("Error hashing the password at delete password.")
    return;
  }

  if (!comparisonResult) {
    res.status(400).json('Wrong old password. Account not deleted.');
    return;
  }

  let deleteResult;
  try {
    deleteResult = await User.deleteOne({ _id: existingUser.id, email: req.body.email })
  } catch (err) {
    console.log(err)
    res.status(503).json("Error trying delete user from DB. Likely network error.");
    return;
  }

  if (!deleteResult) {
    res.status(503).json("Unable to delete user account. Service unavailable.");
    return;
  }

  res.status(200).json(`Deleted: (email: ${req.body.email})`);
};


exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
exports.deleteUser = deleteUser;
exports.updatePassword = updatePassword;
