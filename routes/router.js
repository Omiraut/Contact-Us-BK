const { Router } = require("express");
const router = Router();
const controller = require("../controller/controller");

router.post("/web", controller.addWebsiteDetails);
router.post("/submit", controller.addContactFrom);
router.get("/send", controller.sendToClient);
module.exports = router;
