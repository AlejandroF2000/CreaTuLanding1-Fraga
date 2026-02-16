import { useContext, useMemo, useState } from "react";
import { CartContext } from "../context/CartContext";

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const money = useMemo(
    () => (n) =>
      new Intl.NumberFormat("es-UY", {
        style: "currency",
        currency: "UYU",
        maximumFractionDigits: 0,
      }).format(n || 0),
    []
  );

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => q + 1);

  const handleAdd = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        img: product.img,
      },
      qty
    );

    alert(
      `✅ Producto agregado al carrito\n\n${product.name}\nCantidad: ${qty}\nTotal: ${money(
        product.price * qty
      )}`
    );
  };

  return (
    <main className="page-content">
      <h1 className="page-title">{product.name}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
          alignItems: "start",
        }}
      >
        <img
          src={product.img}
          alt={product.name}
          style={{
            width: "100%",
            height: "420px",
            objectFit: "cover",
            borderRadius: "16px",
            border: "1px solid #eee",
          }}
        />

        <div>
          <p style={{ marginBottom: "10px", opacity: 0.8 }}>
            Categoría: <strong>{product.category}</strong>
          </p>

          <p style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "10px" }}>
            {money(product.price)}
          </p>

          <p style={{ lineHeight: 1.6, marginBottom: "16px" }}>
            {product.description}
          </p>

          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
            <button className="btn" type="button" onClick={dec} style={{ width: "auto", padding: "10px 14px" }}>
              −
            </button>

            <strong>{qty}</strong>

            <button className="btn" type="button" onClick={inc} style={{ width: "auto", padding: "10px 14px" }}>
              +
            </button>
          </div>

          <button className="btn" type="button" onClick={handleAdd}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </main>
  );
}

export default ItemDetail;
