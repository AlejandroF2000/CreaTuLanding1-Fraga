function About() {
  return (
    <main>
      {/* Portada */}
      <section className="page-hero">
        

       <section className="portada">
  <img src="/images/vali-sobrenosotros-portada.jpg" alt="Sobre Nosotros VĀLI" />
</section>

        <h1 className="page-title">Sobre Nosotros</h1>
        <p className="page-subtitle">
          VĀLI nace para vestir autenticidad: diseño, detalle y actitud.
        </p>
      </section>

      {/* Contenido */}
      <section className="page-content">
        <div className="about">
          <div className="about__text">
            <h2>Nuestra esencia</h2>
            <p>
              Creamos prendas únicas para personas auténticas. Nos inspira lo
              simple, lo bien hecho y lo que dura: telas, cortes y combinaciones
              que te acompañan en tu día.
            </p>

            <h2>Nuestro foco</h2>
            <ul className="about__list">
              <li>Diseño pensado para usar y reusar.</li>
              <li>Calidad visual + comodidad real.</li>
              <li>Ediciones pequeñas, identidad fuerte.</li>
            </ul>
          </div>

          <div className="about__image">
            <img
              src="/images/vali-sobrenosotros-imagen-principal.jpg"
              alt="Equipo VĀLI"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
