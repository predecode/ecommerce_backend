const multer = require("multer");
const nanoid = require("nanoid");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "../../images"));
  },
  filename: function (req, file, cb) {
    cb(null, nanoid.nanoid(15) + "-" + file.originalname);
  },
});

exports.uploadfile = multer({ storage: storage });
