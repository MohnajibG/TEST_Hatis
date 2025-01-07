const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connexion à MongoDB
    const conn = await mongoose.connect("mongodb://localhost:27017/tableDB");

    console.log(`MongoDB Connected✅`);
  } catch (err) {
    console.error("Error connecting to MongoDB🛑");
  }
};

module.exports = connectDB;
