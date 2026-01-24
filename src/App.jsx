import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <footer className="footer">
        2026© Todos Los Derechos Reservados
      </footer>
    </>
  );
}

export default App;
