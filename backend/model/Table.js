const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  row: { type: Number, required: true },
  col: { type: Number, required: true },
  value: { type: String, required: true },
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;
