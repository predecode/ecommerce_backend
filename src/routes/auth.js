const express = require("express");
const { signup, signin } = require("../controller/auth");
const {
  validateSignupReq,
  isRequestValidated,
  validateSigninReq,
} = require("../validators/auth");
const router = express.Router();

router.post("/signup", validateSignupReq, isRequestValidated, signup);

router.post("/signin", validateSigninReq, isRequestValidated, signin);

// router.post("/profile", requireSignIn, (req, res) => {
//   res.status(200).json({
//     user: "Profile Api",
//   });
// });

module.exports = router;
