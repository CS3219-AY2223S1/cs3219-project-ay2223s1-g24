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

    // const error = new HttpError(
    //   'Fetching users failed, please try again later.',
    //   500
    // );
    // return next(error);

    res.status(503).json('Something went wrong (likely network issue). Could not delete user.');
    return;
  }
  res.status(200).json({ users: users.map(user => user.toObject({ getters: true })) });
};



// POST
const signup = async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return next(
    //   new HttpError('Invalid inputs passed, please check your data.', 422)
    // );
    res.status(400).json('Invalid inputs passed, please check your data.');
    return;
  }

  bcrypt.hash(req.body.password, 10).then(hashedPassword => {
    const createdUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    createdUser.save().then((retrievedResult => {
      console.log(retrievedResult)
      res.status(201).json({ 
        message: "Signup done!",
        result: retrievedResult,
        user: createdUser.toObject({ getters: true })
      })
    }))
    .catch(err => {
      console.log(err)
      res.status(409).json("This account already exists (likely) or network issue (unlikely).");
    })
  });
};


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

    // const error = new HttpError(
    //   'updateUser failed due to some network or HTTP error?',
    //   500
    // );
    // return next(error);

    console.log(err)
    res.status(503).json('Something went wrong (likely network issue). Could not delete user.');
    return;
  }

  if (!existingUser) {
    console.log("User does not exist in database.")
    res.status(404).json("User not found in database to update password.")
    return;
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
        res.status(503).json("Unable to update user password. Service unavailable.");
        return;
      }
      res.status(200).json("User password updated!");
    });
  })
  .catch(err => {
    console.log(err)
    res.status(503).json("Error trying to hash password");
    return;
  })
};



// GET
const login = async (req, res, next) => {

  let existingUser;
  try {
    existingUser = await User.findOne({email: req.body.email});
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

  res.status(200).json({
    message: 'Logged in!',
    // user: existingUser.name,
    // email: existingUser.email
    user: existingUser.toObject({ getters: true })

  });
};



// DELETE
const deleteUser = async (req, res, next) => {

  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return next(
  //     new HttpError('Invalid inputs passed, please check your data.', 422)
  //   );
  // }

  const userId = req.params.uid;
  const { name, email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findById(userId);
  } catch (err) {
    res.status(503).json('Something went wrong (likely network issue). Could not delete user.');
    return;
  }

  if (!existingUser) {
    res.status(400).json('User does not exist in database.');
    return;
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

  const msg = `Deleted: (name: ${existingUser.name}, email: ${existingUser.email})`

  res.status(200).json({ message: msg});
};




exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
exports.deleteUser = deleteUser;
exports.updatePassword = updatePassword;
