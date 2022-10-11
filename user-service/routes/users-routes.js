const express = require("express");
const { check } = require("express-validator");
const usersController = require("../controllers/users-controllers");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/getUsers", usersController.getUsers);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);

router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").not().isEmpty(),
  ],
  usersController.login
);

router.delete(
  "/deleteUser",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").not().isEmpty(),
  ],
  usersController.deleteUser
);

router.put(
  "/updatePassword",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").not().isEmpty(),
    check("new_password").isLength({ min: 6 }),
  ],
  usersController.updatePassword
);

router.get("/:id/verify/:token/", [], usersController.verifyEmail);

module.exports = router;
