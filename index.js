const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const expenseRoutes = require('./routes/expenseRoutes');
const savingRoutes = require("./routes/savingRoutes");
const investmentRoutes = require("./routes/investmentRoutes");
app.use(express.static(path.join(__dirname,"pubilc")));
app.use('/api/expenses',expenseRoutes);
app.use("/api/savings",savingRoutes);
app.use("/api/investments",investmentRoutes);
// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker")
.then(() => {
    console.log("MongoDB Connected Successfully ✅");
})
.catch((error) => {
    console.log("MongoDB Connection Failed ❌", error);
});

// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});