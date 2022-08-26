const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const HttpError = require('../models/http-error');
const User = require('../models/user');


// GET
const getUsers = async (req, res, next) => {

  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.status(200).json({ users: users.map(user => user.toObject({ getters: true })) });
};



// POST
const signup = async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err)
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'User exists already, please login instead.',
      422
    );
    return next(error);
  }

  bcrypt.hash(password, 10).then(hashedPassword => {
    const createdUser = new User({
      name,
      email,
      password: hashedPassword
    });

    createdUser.save().then((res => {
      res.status(201).json({ 
        message: "Signup done!",
        result: res,
        user: createdUser.toObject({ getters: true })
      })
    }))
    .catch(err => {
      const error = new HttpError(
        'Signing up failed, please try again later.',
        500
      );
      return next(error);
    })
  });
};


// PUT. TODO: SHOULD NOT BE A PUT REQUEST FOR UPDATE PASSWORD. SINCE IF USER DOES NOT EXIST, U DO NOT JUST CREATE A NEW USER. THIS BEHAVIOUR IS FOR B1 PURPOSES ONLY
const updatePassword = async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err)
    const error = new HttpError(
      'updateUser failed due to some network or HTTP error?.',
      500
    );
    return next(error);
  }

  if (!existingUser) {
    console.log("User does not exist in database yet. Creating user now")
    signup(req, res, next)
    return
  }

  bcrypt.hash(req.body.password, 10).then(hashedPassword => {
    console.log(hashedPassword)
    
    const updatedUser = new User({
      _id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      password: hashedPassword,
    });
    User.updateOne(
      {_id: existingUser.id, email: req.body.email},
      updatedUser
    ).then((result) => {
      if (!result) {
        throw new Error("User password could not be updated!?");
      }
      res.status(200).json("User password updated!");
    });
  })
  .catch(err => {
    const error = new HttpError(
      'Error trying to hash password',
      500
    );
    return next(error);
  })
};



// GET
const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({email: email});
  } catch (err) {
    const error = new HttpError(
      'Login in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }

  try {
    comparisonResult = await bcrypt.compare(req.body.password, existingUser.password)
  } catch (error) {
    res.status(404).json("Error hashing the password at login")
    return next()
  }

  if (!comparisonResult) {
    const error = new HttpError(
      'WRONG PASSWORD',
      500
    );
    return next(error);
  }

  res.status(200).json({
    message: 'Logged in!',
    // user: existingUser.name,
    // email: existingUser.email
    user: existingUser.toObject({ getters: true })

  });
};



// DELETE
const deleteUser = async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const userId = req.params.uid;
  const { name, email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete user.',
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'User does not exist in database!',
      404
    );
    return next(error);
  }

  try {
    const currSession = await mongoose.startSession();
    currSession.startTransaction();
    await existingUser.remove({session: currSession});
    await currSession.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete user.',
      500
    );
    return next(error);
  }

  const msg = `Deleted: 
  name: ${existingUser.name}
  email: ${existingUser.email}`
  res.status(200).json({ message: msg});
};




exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
exports.deleteUser = deleteUser;
exports.updatePassword = updatePassword;
