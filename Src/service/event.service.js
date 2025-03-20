const Event = require("../model/event.model");

const createEvent = async (eventData) => {
  return await Event.create(eventData);
};

const getAllEvents = async () => {
  return await Event.find();
};

const getEventById = async (id) => {
  return await Event.findById(id);
};

const updateEvent = async (id, eventData) => {
  return await Event.findByIdAndUpdate(id, eventData, { new: true });
};

const deleteEvent = async (id) => {
  return await Event.findByIdAndDelete(id);
};

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
