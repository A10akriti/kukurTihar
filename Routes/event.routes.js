const express = require("express");
const eventController = require("../Src/controller/event.controller");

const EventRoutes = express.Router();

EventRoutes.post("/", eventController.createEvent);
EventRoutes.get("/", eventController.getAllEvents);
EventRoutes.get("/:id", eventController.getEventById);
EventRoutes.put("/:id", eventController.updateEvent);
EventRoutes.delete("/:id", eventController.deleteEvent);

module.exports = EventRoutes;
