const slugify = require("slugify");
const Category = require("../modals/categoryModal");

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.file) {
    categoryObj.categoryImage = process.env.API + req.file.filename;
  }

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  const cat = new Category(categoryObj);
  cat.save((error, category) => {
    if (error) {
      return res.status(400).json({
        error: error,
      });
    }

    if (category) {
      return res.status(201).json({
        message: "Category Created Successfully!!!",
        category,
      });
    } else {
      return res.status(400).json({
        error: "Something went wrong...",
      });
    }
  });
};

exports.getCategories = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (categories) {
      const categoriesList = createCategory(categories);
      return res.status(200).json({ categoriesList });
    } else {
      return res.status(400).json({ message: "Something went wrong..." });
    }
  });
};

function createCategory(categories, parentId = null) {
  const catogeryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  category.forEach((ele) => {
    catogeryList.push({
      _id: ele._id,
      name: ele.name,
      slug: ele.slug,
      clildren: createCategory(categories, ele._id),
    });
  });

  return catogeryList;
}
