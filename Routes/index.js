const AuthRoutes = require("./auth.routes");
const galleryRoutes = require("./gallery.routes");
const eventRoutes = require ("./event.routes");
const ContactRoutes = require("./contact.routes");
const DashboardRoutes = require("./dashboard.routes");

const app = require("express").Router();

app.use("/auth", AuthRoutes);
app.use("/gallery", galleryRoutes);
app.use ("/event" , eventRoutes);
app.use ("/contact" , ContactRoutes);
app.use ("/dashboard" , DashboardRoutes);

module.exports = app;
