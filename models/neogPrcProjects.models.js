const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: String,
    projectLiveUrl: String,
    category: String,
    description: String,
    instructionsUrl: {
      type: String,
      default: "",
    },
    replUrl: String,
    githubUrl: String,
    isImp: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const NeogPrcProject = mongoose.model("NeogPrcProject", projectSchema);

module.exports = NeogPrcProject;
