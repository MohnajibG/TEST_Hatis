import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./Header";
import Row from "./Row";

const Table = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);
  const [cells, setCells] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCells = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cells");
        console.log("Données récupérées :", response.data);
        setCells(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Erreur lors de la récupération des données :", error);
        setLoading(false);
      }
    };

    fetchCells();
  }, []);

  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedRow(rowIndex);
    setSelectedCol(colIndex);
  };

  const handleHeaderClick = (type, index) => {
    if (type === "row") {
      setSelectedRow(index);
      setSelectedCol(null);
    } else if (type === "col") {
      setSelectedCol(index);
      setSelectedRow(null);
    }
  };

  const updateCell = async (row, col, value) => {
    try {
      await axios.put("http://localhost:3000/cells", { row, col, value });
      console.log(`Cell (${row}, ${col}) updated successfully!`);
    } catch (err) {
      console.error("Error updating cell:", err);
    }
  };

  const generateCellValue = (row, col) => {
    const cell = cells.find((cell) => cell.row === row && cell.col === col);
    return cell
      ? cell.value
      : `Cell ${String.fromCharCode(65 + col)}${row + 1}`;
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="table">
      <Header onHeaderClick={handleHeaderClick} />
      {Array.from({ length: 10 }).map((_, rowIndex) => (
        <Row
          key={rowIndex}
          rowIndex={rowIndex}
          selectedRow={selectedRow}
          selectedCol={selectedCol}
          onCellClick={handleCellClick}
          generateCellValue={generateCellValue}
          updateCell={updateCell}
          cells={cells}
        />
      ))}
    </div>
  );
};

export default Table;
