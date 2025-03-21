const Joi = require("joi");
const ContactModel = require("../model/contact.model");

class ContactService {
  // Validation for contact data
  validateContact = async (data) => {
    try {
      const rules = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        message: Joi.string().required(),
      });

      const response = await rules.validateAsync(data);
      console.log("Validation successful:", response);

      return response;
    } catch (exception) {
      console.error("Validation failed:", exception);
      throw exception;
    }
  };

  // Create a new contact message
  CreateContact = async (data) => {
    try {
      const contact = new ContactModel(data);
      return await contact.save();
    } catch (exception) {
      console.error("Error while creating contact message:", exception);
      throw exception;
    }
  };

  // Fetch all contact messages
  GetAllContacts = async () => {
    try {
      const response = await ContactModel.find();
      return response;
    } catch (exception) {
      console.error("Error while fetching all contact messages:", exception);
      throw exception;
    }
  };

  // Fetch contact message by ID
  GetContactById = async (id) => {
    try {
      const response = await ContactModel.findById(id);
      if (!response) {
        throw new Error("Contact message not found");
      }
      return response;
    } catch (exception) {
      console.error("Error while fetching contact message by ID:", exception);
      throw exception;
    }
  };

  // Delete a contact message
  DeleteContact = async (id) => {
    try {
      const response = await ContactModel.findByIdAndDelete(id);
      if (!response) {
        throw new Error("Contact message not found or deletion failed");
      }
      return response;
    } catch (exception) {
      console.error("Error while deleting contact message:", exception);
      throw exception;
    }
  };
}

const ContactSrv = new ContactService();
module.exports = ContactSrv;
