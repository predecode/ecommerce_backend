const express = require("express");

const router = express.Router();

const { requireSignIn, adminMiddleware } = require("../common-middleware");

const {
  addCategory,
  getCategories,
} = require("../controller/categoryController");

const { uploadfile } = require("../common-middleware/fileupload");

router.post(
  "/category/create",
  requireSignIn,
  adminMiddleware,
  uploadfile.single("categoryImage"),
  addCategory
);

router.get("/category/getcategory", getCategories);

module.exports = router;
