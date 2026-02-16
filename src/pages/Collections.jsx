function Collections() {
  return (
    <main>
      {/* Portada */}
      <section className="page-hero">
        

        <section className="portada">
  <img src="/images/vali-colecciones-portada.jpg" alt="Colecciones VĀLI" />
</section>


        <h1 className="page-title">Colecciones</h1>
        <p className="page-subtitle">
          Inspiración, edición limitada y diseño atemporal.
        </p>
      </section>

      {/* Galería de colecciones */}
      <section className="collections-grid">
        <article className="collection-card">
          <img
            className="collection-card__img"
            src="/images/vali-colecciones-moonlight.jpg"
            alt="Colección Moonlight"
          />
          <h2 className="collection-card__title">Moonlight</h2>
          <p className="collection-card__text">
            Neutros, capas y texturas para un look elegante y versátil.
          </p>
        </article>

        <article className="collection-card">
          <img
            className="collection-card__img"
            src="/images/vali-colecciones-revasser.jpg"
            alt="Colección Revasser"
          />
          <h2 className="collection-card__title">Revasser</h2>
          <p className="collection-card__text">
            Sastrería relajada, siluetas limpias y detalles que elevan.
          </p>
        </article>

        <article className="collection-card">
          <img
            className="collection-card__img"
            src="/images/vali-colecciones-ilikeyou.jpg"
            alt="Colección I Like You"
          />
          <h2 className="collection-card__title">I Like You</h2>
          <p className="collection-card__text">
            Toque urbano, guiños románticos y prendas para todos los días.
          </p>
        </article>

        <article className="collection-card">
          <img
            className="collection-card__img"
            src="/images/vali-colecciones-monaco.jpg"
            alt="Colección Monaco"
          />
          <h2 className="collection-card__title">Monaco</h2>
          <p className="collection-card__text">
            Minimalismo premium: cortes simples, presencia fuerte.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Collections;
