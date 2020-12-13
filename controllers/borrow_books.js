const borrowBooksModel = require("../models/borrow_books");

class BorrowBooksController {
  static getBorrowerData = async (req, res, next) => {
    try {
      const borrower = await borrowBooksModel.find();
      res.status(200).json({
        borrower: borrower,
      });
    } catch (error) {
      next(error);
    }
  };
  static findBorrowerByName = async (req, res, next) => {
    try {
      const { id } = req.params;
      const borrower = await borrowBooksModel.find({
        borrower_name: id,
      });
      res.status(200).json({
        borrower: borrower,
      });
    } catch (error) {
      next(error);
    }
  };

  static createBorrowerData = async (req, res, next) => {
    try {
      const borrower = await borrowBooksModel.create({
        borrower_name: req.body.borrower_name,
        book: req.body.book,
        is_returned: req.body.is_returned,
        borrowed_date: req.body.borrowed_date,
        returned_date: req.body.returned_date,
      });
      res.status(200).json({
        message: "Sucessfully Created Borrower",
        borrower,
      });
    } catch (error) {
      res.status(404).json({
        error,
      });
    }
  };
  static deleteBorrowerById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteBorrower = await borrowBooksModel.deleteOne({
        racks_id: id,
      });
      res.status(200).json({
        message: "item deleted",
        deleteBorrower,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  };

  static updateBorrower = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedBorrower = await borrowBooksModel.updateOne(
        { borrower_name: id },
        {
          borrower_name: req.body.borrower_name,
        }
      );

      res.status(200).json({
        message: "Successfully Update Data",
        updatedBorrower,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  };
}

module.exports = BorrowBooksController;
