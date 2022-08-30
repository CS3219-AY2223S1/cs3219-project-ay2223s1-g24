const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');

const router = express.Router();

router.get('/getUsers', usersController.getUsers);

router.post(
  '/signup',
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],
  usersController.signup
);

router.get('/login', usersController.login);
router.delete('/deleteUser', usersController.deleteUser);
router.put('/updatePassword', usersController.updatePassword);

module.exports = router;
