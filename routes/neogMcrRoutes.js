const express = require("express");
const neogMcr = require("../models/neogMcr.models");

const router = express.Router();

// route to create new mcr
router.post("/neog-mcr", async (req, res) => {
  try {
    const newMCR = await neogMcr(req.body);
    await newMCR.save();
    res.status(201).send(newMCR);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// route to get all mcr
router.get("/neog-mcr", async (req, res) => {
  try {
    const mcr = await neogMcr.find();
    if (mcr.length > 0) {
      res.status(201).json(mcr);
    } else {
      res.status(404).json({ message: "Failed to fetch neog mcr. " });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
