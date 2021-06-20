const slugify = require("slugify");
const Product = require("../modals/productModal");

exports.addProduct = (req, res) => {
  const { name, price, description, category, quantity } = req.body;

  let productPictures = [];

  if (req.files?.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new Product({
    name,
    slug: slugify(name),
    price,
    quantity,
    description,
    category,
    productPictures,
    createdBy: req.user._id,
  });

  product.save((error, product) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (product) {
      return res.status(201).json({
        message: "Product Created Successfully!!!",
        product,
      });
    } else {
      return res.status(400).json({ message: "Something went wrong..." });
    }
  });
};

exports.getProducts = (req, res) => {
  Product.find({}).exec((error, products) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (products) {
      return res.status(200).json({ products });
    } else {
      return res.status(400).json({ message: "Something went wrong..." });
    }
  });
};
