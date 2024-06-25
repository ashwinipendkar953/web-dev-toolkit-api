const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: String,
  projectImage: String,
  category: String,
  description: String,
  replUrl: String,
  githubUrl: String,
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
