const express = require("express");

const router = express.Router();

const { requireSignIn, userMiddleware } = require("../common-middleware");

const { addItemToCart } = require("../controller/cartController");

router.post(
  "/user/cart/addtocart",
  requireSignIn,
  userMiddleware,
  addItemToCart
);

module.exports = router;
