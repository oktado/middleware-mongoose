const racksModel = require("../models/racks");

class RacksController {
  static getRacksData = async (req, res, next) => {
    try {
      const racks = await racksModel.find();
      res.status(200).json({
        racks: racks,
      });
    } catch (error) {
      res.status(404).json({
        message: "Not Found",
      });
    }
  };
  static findRacksByFloor = async (req, res, next) => {
    try {
      const { id } = req.params;
      const racks = await racksModel.find({
        floor: id,
      });
      res.status(200).json({
        racks: racks,
      });
    } catch (error) {
      res.status(404).json({
        message: "Not Found",
        error,
      });
    }
  };

  static createRacksData = async (req, res, next) => {
    try {
      const racks = await racksModel.create({
        section: req.body.section,
        number: req.body.number,
        floor: req.body.floor,
      });
      res.status(200).json({
        message: "Sucessfully Created Rack",
        racks,
      });
    } catch (error) {
      res.status(404).json({
        error,
      });
    }
  };
  static deleteRacksById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedRacks = await racksModel.deleteOne({
        floor: id,
      });
      res.status(200).json({
        message: "racks deleted",
        deletedRacks,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  };

  static updateRacks = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedRacks = await racksModel.updateOne(
        { section: id },
        {
          section: req.body.section,
        }
      );

      res.status(200).json({
        message: "Successfully Update Data",
        updatedRacks,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  };
}

module.exports = RacksController;
