const express = require("express");

const router = express.Router();

const { requireSignIn, adminMiddleware } = require("../common-middleware");

const { addProduct, getProducts } = require("../controller/productController");

const { uploadfile } = require("../common-middleware/fileupload");

router.post(
  "/product/create",
  requireSignIn,
  adminMiddleware,
  uploadfile.array("productPictures"),
  addProduct
);

router.get("/product/getproduct", getProducts);

module.exports = router;
