const express = require("express");

const { isRequestValidated } = require("../../common-middleware");

const {
  signup,
  signin,
} = require("../../controller/admin/adminAuthController");

const {
  validateSignupReq,
  validateSigninReq,
} = require("../../validators/authValidator");

const router = express.Router();

router.post("/admin/signup", validateSignupReq, isRequestValidated, signup);

router.post("/admin/signin", validateSigninReq, isRequestValidated, signin);

module.exports = router;
