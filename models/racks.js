"use strict";
const mongoose = require("mongoose");

const racksSchema = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 12,
      validate: {
        validator: (val) => {
          return /[^A-Z]/i.test(val);
        },
      },
    },
    number: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },
    floor: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const racks = mongoose.model("racks", racksSchema);

module.exports = racks;
