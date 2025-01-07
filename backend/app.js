const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const tableRoutes = require("./routes/table");
const Table = require("./model/Table");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à la base de données
connectDB();

// Routes
app.use(tableRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route introuvable" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
