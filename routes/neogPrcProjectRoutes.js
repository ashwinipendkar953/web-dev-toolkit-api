const express = require("express");
const NeogPrcProject = require("../models/neogPrcProjects.models");

const router = express.Router();

// Route to create a new product
router.post("/neog-prc-projects", async (req, res) => {
  try {
    const newProject = new NeogPrcProject(req.body);
    await newProject.save();
    res.status(201).send(newProject);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Route to get all projects
router.get("/neog-prc-projects", async (req, res) => {
  try {
    const neogPrcProjects = await NeogPrcProject.find();
    res.status(200).send(neogPrcProjects);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
