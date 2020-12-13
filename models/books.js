"use strict";
const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      minlength: 3,
      maxlength: 10,
      required: true,
      validate: {
        validator: (val) => {
          return /[^A-Z]/i.test(val);
        },
        message: `invalid name format`,
      },
    },
    title: String,
    published_year: Date,
    rack: {
      type: mongoose.Types.ObjectId,
      ref: "racks",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const books = mongoose.model("books", booksSchema);
module.exports = books;
