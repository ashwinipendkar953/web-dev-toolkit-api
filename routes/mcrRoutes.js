const express = require("express");
const MCR = require("../models/mcr.models");

const router = express.Router();

// route to create new mcr
router.post("/mcr", async (req, res) => {
  try {
    const newMCR = await MCR(req.body);
    await newMCR.save();
    res.status(201).send(newMCR);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// route to get all mcr
router.get("/mcr", async (req, res) => {
  try {
    const mcr = await MCR.find();
    if (mcr.length > 0) {
      res.status(201).json(mcr);
    } else {
      res.status(404).json({ message: "Failed to fetch mcr. " });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
