const express = require("express");

const router = express.Router();

const { validateAddCategoryReq } = require("../validators/categoryValidator");

const {
  isRequestValidated,
  requireSignIn,
  adminMiddleware,
} = require("../common-middleware");

const {
  addCategory,
  getCategories,
} = require("../controller/categoryController");

router.post(
  "/category/create",
  requireSignIn,
  adminMiddleware,
  validateAddCategoryReq,
  isRequestValidated,
  addCategory
);

router.get("/category/getcategory", getCategories);

module.exports = router;
