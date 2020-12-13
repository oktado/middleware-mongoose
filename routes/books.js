const Router = require("express").Router();

const booksController = require("../controllers/booksControllers");

const errorHandler = require("../middleware/errorHandler");

Router.get("/", errorHandler, booksController.getBooksData);

Router.get("/:id", booksController.findBooksById);

Router.post("/", booksController.createBooks);

Router.delete("/:id", booksController.deleteBooks);

Router.put("/:id", booksController.updateBooks);
// Router.patch("/", bookController.patch);

module.exports = Router;
