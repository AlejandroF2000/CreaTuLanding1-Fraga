import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "./ItemList";

function ItemListContainer({ greeting = "Bienvenido a VĀLI" }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    getProducts()
      .then((res) => {
        if (!mounted) return;

        if (categoryId) {
          setProducts(res.filter((p) => p.category === categoryId));
        } else {
          setProducts(res);
        }
      })
      .catch((err) => console.error("Error cargando productos:", err))
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [categoryId]);

  if (loading) return <main className="page-content">Cargando productos…</main>;

  return (
    <main className="page-content">
      <h1 className="page-title">{greeting}</h1>
      <ItemList products={products} />
    </main>
  );
}

export default ItemListContainer;
