const ContactModel = require("../model/contact.model");


class ContactController {
   contact = async (req, res, next) => {
    try {
      let data = req.body;

      
      if (!data.name || !data.email || !data.message) {
        throw { msg: "All fields (name, email, message) are required." };
      }

        
     
      let response = await new ContactModel(data).save();

      if (response) {
        res.json({
          data: response,
          msg: "Thank you for contacting us. We will get back to you soon.",
          code: 200,
          meta: null,
        });
      } else {
        throw { msg: "Failed to submit your message. Please try again later." };
      }
    } catch (error) {
      console.log("contact", error);
      next({
        msg: error,
        code: 500,
        meta: null,
      });
    }
  };
}

const contactCtrl = new ContactController();
module.exports = contactCtrl;
