const GalleryCtrl = require("../Src/controller/gallery.controller");
const uploader = require("../Src/middleware/uploader");
const AuthCheck = require("../Src/rbac/authCheck");
const { IsAdmin } = require("../Src/rbac/rbac");

const galleryRoutes = require("express").Router();

const dirPath = (req, res, next) => {
  req.uploadPath = "./public/upload";
  next();
};

galleryRoutes.post(
  "/image",
  dirPath,
  uploader.single("image"),
  GalleryCtrl.UploadImage
);
galleryRoutes.get("/active/:id");
galleryRoutes.get("/allpost", GalleryCtrl.getAllPost);
galleryRoutes.get("/hello", GalleryCtrl.test);
galleryRoutes.patch(
  "/post/update/:id",
  AuthCheck,
  IsAdmin,
  dirPath,
  uploader.single("image"),
  GalleryCtrl.UpdatePost
);

module.exports = galleryRoutes;
