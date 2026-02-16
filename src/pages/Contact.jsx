import { useState } from "react";

function Contact() {
  const [ok, setOk] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setOk(true);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="portada-seccion portada-contacto">
          <img
            className="img-hover"
            src="/images/vali-contactanos-portada.jpg"
            alt="Contacto VĀLI"
          />
        </div>

        <h1 className="page-title">Contáctanos</h1>
        <p className="page-subtitle">
          ¿Consultas, talles o pedidos? Escribinos y te respondemos.
        </p>
      </section>

      <section className="page-content">
        <div className="contact">
          <form className="contact__form" onSubmit={submit}>
            <label className="field">
              <span>Nombre</span>
              <input type="text" placeholder="Tu nombre" required />
            </label>

            <label className="field">
              <span>Email</span>
              <input type="email" placeholder="tunombre@email.com" required />
            </label>

            <label className="field">
              <span>Mensaje</span>
              <textarea
                rows="5"
                placeholder="Contanos en qué te ayudamos..."
                required
              />
            </label>

            <button className="btn" type="submit">
              Enviar
            </button>

            {ok && (
              <p style={{ marginTop: "10px", fontWeight: "600" }}>
                Nos contactaremos contigo a la brevedad ✅
              </p>
            )}
          </form>

          <aside className="contact__social">
            <h2>Seguinos</h2>

            <div className="social-cards">
              <a
                className="social-card"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de VĀLI"
              >
                <img className="img-hover" src="/images/facebook-logo.jpeg" alt="Facebook" />
                <span>Facebook</span>
              </a>

              <a
                className="social-card"
                href="https://www.instagram.com/vali.uy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de VĀLI"
              >
                <img className="img-hover" src="/images/instagram-logo.jpeg" alt="Instagram" />
                <span>Instagram</span>
              </a>
            </div>

            <div className="contact__info">
              <p>
                <strong>Horario:</strong> Lun a Vie — 10:00 a 18:00
              </p>
              <p>
                <strong>Ubicación:</strong> Montevideo, Uruguay
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Contact;
