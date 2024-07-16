const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: String,
    projectLiveUrl: String,
    category: String,
    description: String,
    replUrl: String,
    githubUrl: String,
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
