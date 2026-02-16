import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Collections from "./pages/Collections.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Productos (lista) + Detalle “dentro” de productos */}
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:id" element={<Products />} />

        {/* CATEGORÍAS (para la entrega) */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting="Catálogo VĀLI" />}
        />

        {/* DETALLE (para la entrega) */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/colecciones" element={<Collections />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contactanos" element={<Contact />} />
        <Route path="/carrito" element={<Cart />} />

        <Route
          path="*"
          element={
            <main className="page-content">
              <h1 className="page-title">404</h1>
              <p>Página no encontrada.</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
