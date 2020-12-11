const express = require("express");
const mainController = require("../app/controllers/main");
const areaController = require("../app/controllers/area");
const router = express.Router();

router.get("/sobre", mainController.sobre);
router.get("/ui", mainController.ui);
router.get("/area", areaController.index);
router.get("/game", mainController.game);
router.get("/", mainController.index);

module.exports = router;