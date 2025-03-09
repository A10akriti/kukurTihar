const authctrl = require("../Src/controller/auth.controller");
const contactCtrl = require("../Src/controller/contact.controller");
const AuthCheck = require("../Src/rbac/authCheck");

const AuthRoutes = require("express").Router();

AuthRoutes.post("/login", authctrl.login);
AuthRoutes.post("/register", authctrl.register);
AuthRoutes.get("/me", AuthCheck);


AuthRoutes.post ("/contact", contactCtrl.contact);



module.exports = AuthRoutes;
