const { Schema, model } = require("mongoose");

const recordSchema = new Schema({
  date: Date,
  description: String,
  value: Number,
});

module.exports = model("Record", recordSchema);
