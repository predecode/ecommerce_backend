const { check } = require("express-validator");

exports.validateAddCategoryReq = [
  check("name").notEmpty().withMessage("Category Name is required"),
];
