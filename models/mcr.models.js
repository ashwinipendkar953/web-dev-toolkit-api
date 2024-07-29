const mongoose = require("mongoose");

const mcrSchema = new mongoose.Schema(
  {
    mcrName: String,
    mcrLiveUrl: String,
    category: String,
    description: String,
    replUrl: String,
    githubUrl: String,
  },
  { timestamps: true }
);

const MCR = mongoose.model("MCR", mcrSchema);

module.exports = MCR;
