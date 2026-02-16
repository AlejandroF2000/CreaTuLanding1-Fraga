import { useContext, useMemo, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, changeQty, removeItem, clearCart, totalPrice, totalItems } =
    useContext(CartContext);

  const money = (n) =>
    new Intl.NumberFormat("es-UY", {
      style: "currency",
      currency: "UYU",
      maximumFractionDigits: 0,
    }).format(n || 0);

  
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("form"); 
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ nombre: "", email: "" });

  const canCheckout = cart.length > 0;

  const closeModal = () => {
    setIsOpen(false);
    setStep("form");
    setNombre("");
    setEmail("");
    setErrors({ nombre: "", email: "" });
  };

  const openModal = () => {
    if (!canCheckout) return;
    setIsOpen(true);
    setStep("form");
  };

  
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const validar = () => {
    const next = { nombre: "", email: "" };
    if (!nombre.trim()) next.nombre = "Ingresá tu nombre y apellido.";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!email.trim()) next.email = "Ingresá tu email.";
    else if (!emailOk) next.email = "Ingresá un email válido.";

    setErrors(next);
    return !next.nombre && !next.email;
  };

  const confirmarCompra = (e) => {
    e.preventDefault();
    if (!validar()) return;

    
    setStep("success");

    
    setTimeout(() => {
      clearCart();
    }, 300);
  };

  const successTitle = useMemo(() => {
    const first = (nombre || "").trim().split(" ")[0];
    return first ? `¡Gracias, ${first}!` : "¡Gracias!";
  }, [nombre]);

  return (
    <>
      <main className="page-content">
        <h1 className="page-title">Carrito</h1>

        {!cart.length ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <div style={{ display: "grid", gap: "12px", marginTop: "12px" }}>
              {cart.map((p) => (
                <div
                  key={p.id}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    border: "1px solid #eee",
                    padding: "12px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      border: "1px solid #eee",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <strong>{p.name}</strong>
                    <div style={{ opacity: 0.7, fontSize: "14px" }}>
                      {p.category}
                    </div>
                    <div style={{ marginTop: "6px" }}>
                      {money(p.price)} x {p.qty} ={" "}
                      <strong>{money(p.price * p.qty)}</strong>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <button className="btn" type="button" onClick={() => changeQty(p.id, -1)}>
                      −
                    </button>
                    <span>{p.qty}</span>
                    <button className="btn" type="button" onClick={() => changeQty(p.id, +1)}>
                      +
                    </button>
                    <button className="btn" type="button" onClick={() => removeItem(p.id)}>
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                gap: "12px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <strong>Total: {money(totalPrice)}</strong>

              <button className="btn" type="button" onClick={clearCart} style={{ maxWidth: 220 }}>
                Vaciar
              </button>

              <button
                className="btn"
                type="button"
                onClick={openModal}
                style={{ maxWidth: 220 }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </main>

      {/*Checkout */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal} role="presentation">
          <div
            className={`modal ${step === "success" ? "modal--success" : ""}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Checkout"
          >
            <button className="modal-close" onClick={closeModal} type="button" aria-label="Cerrar">
              ✕
            </button>

            {step === "form" ? (
              <>
                <h2 className="modal-title">Finalizar compra</h2>
                <p className="modal-subtitle">
                  Completá tus datos para confirmar. Items: <strong>{totalItems}</strong> · Total:{" "}
                  <strong>{money(totalPrice)}</strong>
                </p>

                <form className="modal-form" onSubmit={confirmarCompra}>
                  <label className="modal-field">
                    <span>Nombre y apellido</span>
                    <input
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Ej: Alejandro Fraga"
                      type="text"
                    />
                    {errors.nombre && <small className="modal-error">{errors.nombre}</small>}
                  </label>

                  <label className="modal-field">
                    <span>Email</span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ej: alegfraga@gmail.com"
                      type="email"
                    />
                    {errors.email && <small className="modal-error">{errors.email}</small>}
                  </label>

                  <div className="modal-actions">
                    <button className="modal-secondary" type="button" onClick={closeModal}>
                      Cancelar
                    </button>
                    <button className="modal-primary" type="submit">
                      Confirmar compra
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <div className="success-wrap">
                  <div className="success-icon">✓</div>
                  <h2 className="modal-title">{successTitle}</h2>
                  <p className="modal-subtitle">
                    Tu compra ha sido realizada con éxito.
                    <br />
                    Te enviamos el detalle a <strong>{email}</strong>.
                  </p>

                  <button className="modal-primary" type="button" onClick={closeModal}>
                    Listo
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
