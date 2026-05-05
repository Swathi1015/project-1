const express = require("express");
const router = express.Router();
const Saving = require("../models/Saving");

// GET all savings
router.get("/", async (req, res) => {
    try {
        const savings = await Saving.find();
        res.json(savings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new saving
router.post("/", async (req, res) => {
    try {
        const newSaving = new Saving(req.body);
        const saved = await newSaving.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;