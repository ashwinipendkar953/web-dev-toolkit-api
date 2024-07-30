const mongoose = require("mongoose");

const mcrSchema = new mongoose.Schema(
  {
    mcrName: String,
    mcrLiveUrl: String,
    category: String,
    description: String,
    instructionsUrl: {
      type: String,
      default: "",
    },
    replUrl: {
      type: String,
      default: "",
    },
    githubUrl: String,
    isImp: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const neogMcr = mongoose.model("neogMcr", mcrSchema);

module.exports = neogMcr;
