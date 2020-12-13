const booksModel = require("../models/books");

class BookController {
  static getBooksData = async (req, res, next) => {
    try {
      const books = await booksModel.find().populate("books", "author");
      res.status(200).json({
        books: books,
      });
    } catch (error) {
      next(error);
    }
  };
  static findBooksById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const books = await booksModel.find({
        author: id,
      });
      res.status(200).json({
        books: books,
      });
    } catch (error) {
      next(error);
    }
  };

  static createBooks = async (req, res, next) => {
    try {
      const books = await booksModel.create({
        author: req.body.author,
        title: req.body.title,
        published_year: req.body.published_year,
        rack: req.body.rack,
      });
      res.status(200).json({
        message: "Sucessfully Created Book",
        result: books,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  static deleteBooks = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteBook = await booksModel.deleteOne({
        racks_id: id,
      });
      res.status(200).json({
        message: "item deleted",
        deleteBook,
      });
    } catch (error) {
      next(error);
    }
  };

  static updateBooks = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedBook = await booksModel.updateOne(
        { author: id },
        {
          published_year: req.body.racks_id,
        }
      );

      res.status(200).json({
        message: "Successfully Update Books",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = BookController;
