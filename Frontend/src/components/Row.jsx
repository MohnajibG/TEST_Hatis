import TableCell from "./TableCell";

const Row = ({
  rowIndex,
  selectedRow,
  selectedCol,
  onCellClick,
  generateCellValue,
  updateCell,
}) => {
  return (
    <div className={`row ${rowIndex === selectedRow ? "selected" : ""}`}>
      <TableCell
        value={rowIndex + 1}
        isSelected={rowIndex === selectedRow}
        onClick={() => onCellClick(rowIndex, null)}
      />
      {Array.from({ length: 10 }).map((_, colIndex) => (
        <TableCell
          key={`${rowIndex}-${colIndex}`}
          row={rowIndex}
          col={colIndex}
          value={generateCellValue(rowIndex, colIndex)}
          isSelected={selectedCol === colIndex}
          onClick={() => onCellClick(rowIndex, colIndex)}
          updateCell={updateCell}
        />
      ))}
    </div>
  );
};

export default Row;
