const express = require("express");
const Project = require("../models/projects.models");

const router = express.Router();

// Route to create a new product with an image
router.post("/projects", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).send(newProject);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get all projects
router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to get a project image by ID
router.get("/projects/:projectId/image", async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).send("Project not found");
    }
    if (!project.projectImage) {
      return res.status(404).send("Image not found");
    }
    res.set("Content-Type", project.projectImage.contentType);
    res.send(project.projectImage.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
