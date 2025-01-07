const express = require("express");
const Table = require("../model/Table");
const router = express.Router();

// Obtenir toutes les cellules
router.get("/cells", async (req, res) => {
  try {
    const cells = await Table.find();
    res.json(cells);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des cellules" });
  }
});

// Mettre à jour une cellule
router.put("/cells", async (req, res) => {
  const { row, col, value } = req.body;
  try {
    const cell = await Table.findOneAndUpdate(
      { row, col },
      { value },
      { upsert: true, new: true }
    );
    res.status(200).json(cell);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de la cellule" });
  }
});

module.exports = router;
