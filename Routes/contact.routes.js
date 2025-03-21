
const express = require("express");
const contactCtrl = require("../Src/controller/contact.controller");
const ContactRoutes = express.Router();


ContactRoutes.post("/contact", contactCtrl.contact);

module.exports = ContactRoutes;
