const Router = require("express").Router();
const booksRouter = require("./books");
const borrowBooksRouter = require("../routes/borrow_books");
const racksRouter = require("../routes/racks");

Router.use("/books", booksRouter);

Router.use("/borrow_books", borrowBooksRouter);

Router.use("/racks", racksRouter);

module.exports = Router;
