import Item from "./Item.jsx";

function ItemList({ products }) {
  return (
    <section className="productos-grid">
      {products.map((p) => (
        <Item key={p.id} product={p} />
      ))}
    </section>
  );
}

export default ItemList;
