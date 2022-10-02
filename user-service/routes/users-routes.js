const express = require("express");
const { check } = require("express-validator");
const usersController = require("../controllers/users-controllers");
const checkAuth = require("../middleware/check-auth");
const Token = require("../models/token");

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

router.get("/:id/verify/:token/", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    await User.updateOne({ _id: user._id, verified: true });
    await token.remove();

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
