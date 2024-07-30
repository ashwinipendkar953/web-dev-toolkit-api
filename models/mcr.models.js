const mongoose = require("mongoose");

const mcrSchema = new mongoose.Schema(
  {
    mcrName: String,
    mcrLiveUrl: String,
    category: String,
    description: String,
    instructionsUrl: String,
    replUrl: String,
    githubUrl: String,
    isImp: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const MCR = mongoose.model("MCR", mcrSchema);

module.exports = MCR;
