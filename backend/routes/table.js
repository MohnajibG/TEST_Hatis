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
// Ajouter ou mettre à jour une cellule
router.post("/table", async (req, res) => {
  const { row, col, value } = req.body;
  try {
    // Vérifier si la cellule existe déjà
    const existingCell = await Table.findOne({ row, col });

    if (existingCell) {
      // Si la cellule existe, mettre à jour sa valeur
      existingCell.value = value;
      await existingCell.save();
    } else {
      // Sinon, créer une nouvelle cellule
      const newCell = new Table({ row, col, value });
      await newCell.save();
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res
      .status(500)
      .json({
        error: "Erreur lors de l'ajout ou de la mise à jour de la cellule",
      });
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

router.delete("/cells", async (req, res) => {
  try {
    await Table.deleteMany({});
    res.status(200).json({ message: "Toutes les cellules ont été supprimées" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression des cellules" });
  }
});

module.exports = router;
