import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail.jsx";

function ItemDetailContainer() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    setLoading(true);

    getProductById(id)
      .then((res) => {
        if (mounted) setProduct(res || null);
      })
      .catch((err) => {
        console.error("Error cargando detalle:", err);
        if (mounted) setProduct(null);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="page-content">
        <h1 className="page-title">Cargando detalle…</h1>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="page-content">
        <h1 className="page-title">Producto no encontrado</h1>
        <p>
          El producto con ID <strong>{id}</strong> no existe.
        </p>
      </main>
    );
  }

  return <ItemDetail product={product} />; 
}

export default ItemDetailContainer;
