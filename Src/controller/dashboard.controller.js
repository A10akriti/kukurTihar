const eventService = require("../service/event.service");

const getDashboardData = async (req, res) => {
  try {
    const events = await eventService.getAllEvents();
    res.status(200).json({ totalEvents: events.length, events });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboardData };
