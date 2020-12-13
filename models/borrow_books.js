"use strict";
const mongoose = require("mongoose");

const borrow_booksSchema = new mongoose.Schema(
  {
    borrower_name: {
      type: String,
      minlength: 3,
      maxlength: 10,
      required: true,
      unique: true,
      validate: {
        validator: (val) => {
          return /[^A-Z]/i.test(val);
        },
        message: `invalid name format`,
      },
    },
    book: {
      type: mongoose.Types.ObjectId,
      ref: "books",
    },
    is_returned: Boolean,
    borrowed_date: {
      type: Date,
    },
    returned_date: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const borrow_books = mongoose.model("borrow_books", borrow_booksSchema);

module.exports = borrow_books;
