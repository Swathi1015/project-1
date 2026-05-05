const express = require("express");
const router = express.Router();
const Investment = require("../models/Investment");

// GET all investments
router.get("/", async (req, res) => {
    try {
        const investments = await Investment.find();
        res.json(investments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new investment
router.post("/", async (req, res) => {
    try {
        const newInvestment = new Investment(req.body);
        const saved = await newInvestment.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;