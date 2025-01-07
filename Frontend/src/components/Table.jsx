import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./Header";
import Row from "./Row";

const Table = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);
  const [cells, setCells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCells = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cells");
        setCells(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Erreur lors de la récupération des données");
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
    } catch (err) {
      setError("Erreur lors de la mise à jour de la cellule");
    }
  };

  const generateCellValue = (row, col) => {
    const cell = cells.find((cell) => cell.row === row && cell.col === col);
    return cell
      ? cell.value
      : `Cell ${String.fromCharCode(65 + col)}${row + 1}`;
  };

  const handleReset = async () => {
    try {
      await axios.delete("http://localhost:3000/cells");
      setCells([]);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setError("Erreur lors de la réinitialisation des données");
    }
  };

  return (
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
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Table;
