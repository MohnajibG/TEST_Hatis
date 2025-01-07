const Header = ({ onHeaderClick }) => {
  return (
    <div className="row header">
      <div className="cell header-cell"></div>

      {Array.from({ length: 10 }).map((_, colIndex) => (
        <div
          key={colIndex}
          className="cell header-cell"
          onClick={() => onHeaderClick("col", colIndex)}
        >
          {String.fromCharCode(65 + colIndex)}
        </div>
      ))}
    </div>
  );
};

export default Header;
