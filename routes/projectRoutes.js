const express = require("express");
const Project = require("../models/projects.models");

const router = express.Router();

// Route to create a new product
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

module.exports = router;
