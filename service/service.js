const { ContactUsForm, Websites } = require("../models");

const addWebsiteDetails = async (req, res) => {
  try {
    res.status(200).send("ungaBunga");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const addContactFrom = async (req, res) => {
  try {
  } catch (error) {
    res.status(200).send("visible Confussion");
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
