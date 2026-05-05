let expenses = []; // temporary storage

// GET expenses
const getExpenses = (req, res) => {
  res.json(expenses);
};

// POST expense
const addExpense = (req, res) => {
  const { title, amount, date } = req.body;

  if (!title || !amount) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const newExpense = {
    id: Date.now(),
    title,
    amount,
    date
  };

  expenses.push(newExpense);
  res.status(201).json(newExpense);
};

module.exports = {
  getExpenses,
  addExpense
};