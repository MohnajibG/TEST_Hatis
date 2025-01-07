import Table from "./components/Table";
import "./App.css";

function App() {
  return (
    <>
      <header className="header-App">
        <h1>Tableau de données</h1>
      </header>
      <main className="main-content">
        <Table />
      </main>
      <footer className="footer">
        App React pour un test technique réalisée par{" "}
        <a href="https://github.com/MohnajibG">Najib GUERCHAOUI</a>
      </footer>
    </>
  );
}

export default App;
