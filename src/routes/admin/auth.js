const express = require("express");
const { signup, signin } = require("../../controller/admin/auth");
const {
  validateSignupReq,
  isRequestValidated,
  validateSigninReq,
} = require("../../validators/auth");
const router = express.Router();

router.post("/admin/signup", validateSignupReq, isRequestValidated, signup);

router.post("/admin/signin", validateSigninReq, isRequestValidated, signin);

module.exports = router;
