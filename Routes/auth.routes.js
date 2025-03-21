const express = require("express");
const authctrl = require("../Src/controller/auth.controller");
const contactCtrl = require("../Src/controller/contact.controller");
const AuthCheck = require("../Src/rbac/authCheck");
const { verifyToken, verifyAdmin } = require("../Src/middleware/auth.middleware");

const AuthRoutes = express.Router();

AuthRoutes.post("/login", authctrl.login);
AuthRoutes.post("/register", authctrl.register);
AuthRoutes.get("/me", verifyToken, AuthCheck);
AuthRoutes.post("/contact", contactCtrl.contact);
AuthRoutes.get("/admin/users", verifyToken, verifyAdmin, authctrl.getAllUsers);

module.exports = AuthRoutes;
