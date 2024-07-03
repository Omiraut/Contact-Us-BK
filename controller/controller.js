const service = require("../service/service");

const addWebsiteDetails = async (req, res) => {
  service.addWebsiteDetails(req, res);
};
const addContactFrom = async (req, res) => {
  service.addContactFrom(req, res);
};
const sendToClient = async (req, res) => {
  service.sendToClient(req, res);
};

module.exports = {
  addContactFrom,
  addWebsiteDetails,
  sendToClient,
};
