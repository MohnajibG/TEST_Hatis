import { useState } from "react";

const TableCell = ({ row, col, value, isSelected, onClick, updateCell }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cellValue, setCellValue] = useState(value);

  // Double-clic
  const handleDoubleClick = () => {
    setCellValue("");
    setIsEditing(true);
  };

  // Simple clic
  const handleClick = () => {
    onClick();
  };

  // Mise à jour du contenu pendant la saisie
  const handleInputChange = (e) => {
    setCellValue(e.target.value);
  };

  // Perte de focus
  const handleBlur = async () => {
    setIsEditing(false);
    if (cellValue.trim() === "") {
      setCellValue(value);
    } else {
      try {
        await updateCell(row, col, cellValue);
      } catch (error) {
        console.log(
          `Erreur lors de la mise à jour de la cellule (${row}, ${col}):`,
          error
        );
      }
    }
  };

  // Gestion de la touche Entrée pour valider la saisie
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      if (cellValue.trim() === "") {
        setCellValue(value);
      } else {
        setIsEditing(false);
        try {
          await updateCell(row, col, cellValue);
        } catch (error) {
          console.log(
            `Erreur lors de la mise à jour de la cellule (${row}, ${col}):`,
            error
          );
        }
      }
    }
  };

  return (
    <div
      className={`cell ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          type="text"
          value={cellValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="cell-input"
        />
      ) : (
        cellValue
      )}
    </div>
  );
};

export default TableCell;
