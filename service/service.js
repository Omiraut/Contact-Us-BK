const { where } = require("sequelize");
const { ContactUsForm, Websites } = require("../models");

const addWebsiteDetails = async (req, res) => {
  try {
    const ifExist = Websites.findOne({
      where: {
        address: req.address,
      },
    });
    if (ifExist) {
      res.status(403).json({
        message:
          "Website You Want to register is already exist please view given web address",
      });
    } else {
      const website = Websites.create(req.body);
      res.status(201).json(website);
    }

    // res.status(200).send("ungaBunga");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const addContactFrom = async (req, res) => {
  try {
    const websiteId = req.body.websiteId;
    console.log(websiteId);
    const formData = ContactUsForm.create(req.body);
    res.status(201).json(formData);
    // res.status(200).send("visible Confussion");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sendToClient = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  addContactFrom,
  addWebsiteDetails,
  sendToClient,
};
