import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <article className="product-card">
      <Link to={`/item/${product.id}`} aria-label={`Ver detalle de ${product.name}`}>
        <img src={product.img} alt={product.name} />
      </Link>

      <h3>{product.name}</h3>
      <p className="price">
        {new Intl.NumberFormat("es-UY", {
          style: "currency",
          currency: "UYU",
          maximumFractionDigits: 0,
        }).format(product.price)}
      </p>

      <Link className="producto-btn" to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </article>
  );
}

export default Item;
