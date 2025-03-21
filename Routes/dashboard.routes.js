const express = require("express");
const dashboardController = require("../Src/controller/dashboard.controller");

const DashboardRoutes = express.Router();

DashboardRoutes.get("/", dashboardController.getDashboardData);

module.exports = DashboardRoutes;
