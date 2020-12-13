const Router = require("express").Router();

const borrowBooksController = require("../controllers/borrow_books");

const errorHandler = require("../middleware/errorHandler");

Router.get("/", errorHandler, borrowBooksController.getBorrowerData);

Router.get("/:id", errorHandler, borrowBooksController.findBorrowerByName);

Router.post("/", errorHandler, borrowBooksController.createBorrowerData);

Router.delete("/:id", errorHandler, borrowBooksController.deleteBorrowerById);

Router.put("/:id", errorHandler, borrowBooksController.updateBorrower);
// Router.patch("/", bookController.patch);

module.exports = Router;
