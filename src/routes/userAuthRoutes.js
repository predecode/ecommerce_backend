const express = require("express");

const { isRequestValidated } = require("../common-middleware");

const { signup, signin } = require("../controller/userAuthController");

const {
  validateSignupReq,
  validateSigninReq,
} = require("../validators/authValidator");

const router = express.Router();

router.post("/signup", validateSignupReq, isRequestValidated, signup);

router.post("/signin", validateSigninReq, isRequestValidated, signin);

// router.post("/profile", requireSignIn, (req, res) => {
//   res.status(200).json({
//     user: "Profile Api",
//   });
// });

module.exports = router;
