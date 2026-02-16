import { useEffect } from "react";

function AddToCartModal({
  open,
  product,
  qty,
  setQty,
  onClose,
  onGoCart,
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !product) return null;

  const money = (n) =>
    new Intl.NumberFormat("es-UY", {
      style: "currency",
      currency: "UYU",
      maximumFractionDigits: 0,
    }).format(n || 0);

  const dec = () => setQty((q) => Math.max(1, (q || 1) - 1));
  const inc = () => setQty((q) => Math.min(99, (q || 1) + 1));

  const onChange = (e) => {
    const v = Number(e.target.value);
    if (Number.isNaN(v)) return;
    setQty(Math.max(1, Math.min(99, v)));
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-card">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-tick">✓</div>
          <div>
            <h3 className="modal-title">Producto agregado</h3>
            <p className="modal-subtitle">Se agregó al carrito correctamente.</p>
          </div>
        </div>

        <div className="modal-product">
          <img className="modal-img" src={product.img} alt={product.name} />
          <div className="modal-info">
            <strong>{product.name}</strong>
            <div className="modal-price">{money(product.price)}</div>

            <div className="qty">
              <button className="btn qty-btn" type="button" onClick={dec}>
                −
              </button>

              <input
                className="qty-input"
                type="number"
                min="1"
                max="99"
                value={qty}
                onChange={onChange}
              />

              <button className="btn qty-btn" type="button" onClick={inc}>
                +
              </button>
            </div>

            <div className="modal-total">
              Total: <strong>{money(product.price * qty)}</strong>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn btn-secondary" type="button" onClick={onClose}>
            Seguir comprando
          </button>
          <button className="btn" type="button" onClick={onGoCart}>
            Ir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;
