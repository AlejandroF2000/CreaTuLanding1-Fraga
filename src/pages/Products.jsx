import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getProducts, getProductById } from "../data/products";
import ItemDetail from "../components/ItemDetail.jsx";

function Products() {
  const navigate = useNavigate();
  const { id } = useParams(); // viene de /productos/:id
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // UI state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todas");

  // detalle “embebido”
  const [selected, setSelected] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // cargar listado (promesa + useEffect)
  useEffect(() => {
    let mounted = true;
    setLoading(true);

    getProducts()
      .then((res) => {
        if (mounted) setProducts(res);
      })
      .catch((err) => console.error("Error cargando productos:", err))
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // cargar detalle si hay id en la ruta (/productos/:id)
  useEffect(() => {
    let mounted = true;

    if (!id) {
      setSelected(null);
      return;
    }

    setLoadingDetail(true);
    getProductById(id)
      .then((res) => {
        if (mounted) setSelected(res || null);
      })
      .catch((err) => {
        console.error("Error cargando detalle:", err);
        if (mounted) setSelected(null);
      })
      .finally(() => {
        if (mounted) setLoadingDetail(false);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  const categories = useMemo(() => {
    const uniq = Array.from(new Set(products.map((p) => p.category))).sort();
    return ["todas", ...uniq];
  }, [products]);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();

    return products.filter((p) => {
      const okCat = category === "todas" ? true : p.category === category;
      const okSearch =
        !s ||
        p.name.toLowerCase().includes(s) ||
        p.category.toLowerCase().includes(s);

      return okCat && okSearch;
    });
  }, [products, search, category]);

  const openDetailInside = (productId) => {
    navigate(`/productos/${productId}`);
  };

  const closeDetailInside = () => {
    navigate("/productos");
  };

  if (loading) return <main className="page-content">Cargando productos…</main>;

  return (
    <main className="page-content">
      <div className="products-top">
        <h1 className="page-title">Productos</h1>

        <div className="products-filters">
          <input
            className="products-search"
            type="search"
            placeholder="Buscar por nombre o categoría…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="products-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "todas" ? "Todas las categorías" : c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={id ? "products-layout has-detail" : "products-layout"}>
        {/* LISTA */}
        <section className="productos-grid">
          {filtered.length === 0 ? (
            <p>No hay productos para mostrar.</p>
          ) : (
            filtered.map((p) => (
              <article key={p.id} className="product-card">
                <button
                  type="button"
                  className="product-card__imgbtn"
                  onClick={() => openDetailInside(p.id)}
                  aria-label={`Ver ${p.name}`}
                >
                  <img className="product-card__img" src={p.img} alt={p.name} />
                </button>

                <div className="product-card__info">
                  <h3 className="product-card__title">{p.name}</h3>
                  <span className="product-card__cat">{p.category}</span>

                  <p className="product-card__price">
                    {new Intl.NumberFormat("es-UY", {
                      style: "currency",
                      currency: "UYU",
                      maximumFractionDigits: 0,
                    }).format(p.price)}
                  </p>

                  <div className="product-card__actions">
                    <button
                      type="button"
                      className="btn btn--small"
                      onClick={() => openDetailInside(p.id)}
                    >
                      Ver dentro de Productos
                    </button>

                    {/* Ruta “oficial” de entrega, por si querés mantenerla */}
                    <Link className="btn btn--ghost btn--small" to={`/item/${p.id}`}>
                      Ver detalle (ruta /item)
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>

        {/* DETALLE EMBEBIDO */}
        {id && (
          <aside className="products-detail">
            <div className="products-detail__top">
              <button type="button" className="btn btn--ghost btn--small" onClick={closeDetailInside}>
                ← Volver a Productos
              </button>
            </div>

            {loadingDetail ? (
              <p style={{ padding: "12px" }}>Cargando detalle…</p>
            ) : !selected ? (
              <p style={{ padding: "12px" }}>
                Producto no encontrado (ID: <strong>{id}</strong>)
              </p>
            ) : (
              <div className="products-detail__content">
                {/* Reutilizamos tu ItemDetail real (con add al carrito + qty) */}
                <ItemDetail product={selected} />
              </div>
            )}
          </aside>
        )}
      </div>
    </main>
  );
}

export default Products;
