const ContactModel = require("../model/contact.model");
const EventModel = require("../model/event.model");
const GalleryModel = require("../model/gallerymodel");
const contactCtrl = require("../controller/contact.controller");

class DashboardController {
  getAlldata = async (req, res, next) => {
    try {
      const contactusData = await ContactModel.find();
      const allEvents = await EventModel.find();
      const allImage = await GalleryModel.find();

      res.json({
        data: {
          contactusData,
          allEvents,
          allImage,
        },
        msg: "all data fetched",
      });
    } catch (error) {
      next({
        msg: error,
      });
    }
  };
}

const DashboardCtrl = new DashboardController();
module.exports = DashboardCtrl;