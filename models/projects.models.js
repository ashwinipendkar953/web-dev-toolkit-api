const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: String,
    projectLiveUrl: String,
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

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
