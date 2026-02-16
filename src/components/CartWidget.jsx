import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <Link className="cart" to="/carrito" aria-label="Ir al carrito">
      <span className="cart-icon">🛒</span>
      <span className="badge">{totalItems}</span>
    </Link>
  );
}

export default CartWidget;
