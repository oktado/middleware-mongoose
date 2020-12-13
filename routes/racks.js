const Router = require("express").Router();

const racksController = require("../controllers/racks");

const errorHandler = require("../middleware/errorHandler");

Router.get("/", racksController.getRacksData);

Router.get("/:id", racksController.findRacksByFloor);

Router.post("/", racksController.createRacksData);

Router.delete("/:id", racksController.deleteRacksById);

Router.put("/:id", errorHandler, racksController.updateRacks);
// Router.patch("/", bookController.patch);

module.exports = Router;
