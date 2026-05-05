const express = require("express");
const router = express.Router();
const Expense= require("../models/Expense");

// GET all expenses
router.get("/", async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
});

// POST new expense
router.post("/", async (req, res) => {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    res.json(savedExpense);
});

// PUT update expenses
router.put("/:id", async (req, res) => {
    const updatedExpense = await Expense.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedExpense);
});

// DELETE expense
router.delete("/:id", async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
});
router.post("/profile", async (req, res) => {
  try {
    const Finance = require("../models/Finance");

    let finance = await Finance.findOne();

    if (!finance) {
      finance = new Finance();
    }

    finance.profile = req.body;

    await finance.save();

    res.json(finance);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;