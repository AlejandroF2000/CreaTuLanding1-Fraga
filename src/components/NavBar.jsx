import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <header className="header">
        <img src="/images/vali-logo.png" alt="VĀLI" className="logo" />
      </header>

      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Colecciones</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <li><a href="#">Contáctanos</a></li>
        </ul>

        <CartWidget />
      </nav>
    </>
  );
}

export default NavBar;