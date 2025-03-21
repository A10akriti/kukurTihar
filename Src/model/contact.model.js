const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const ContactModel = mongoose.model("ContactUs", ContactSchema);
module.exports = ContactModel;
