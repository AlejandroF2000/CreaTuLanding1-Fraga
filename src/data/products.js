const products = [
  {
    id: "cam-01",
    name: "Chalecos",
    price: 1890,
    category: "chalecos",
    img: "/images/vali-productos-chalecosycamisas.jpg",
    description: "Camisa de algodón fit regular.",
  },
  {
    id: "cam-02",
    name: "Camisa Lino",
    price: 2290,
    category: "camisas",
    img: "/images/vali-productos-camisas.jpg",
    description: "Lino liviano, ideal verano.",
  },
  {
    id: "sob-01",
    name: "Sobrecamisa Oversize",
    price: 2490,
    category: "sobrecamisas",
    img: "/images/vali-productos-sobrecamisas.jpg",
    description: "Corte amplio, textura suave.",
  },
  {
    id: "ves-01",
    name: "Vestido Midi",
    price: 3290,
    category: "vestidos",
    img: "/images/vali-productos-vestidos.jpg",
    description: "Corte midi, sutil vuelo.",
  },
];

export const getProducts = () =>
  new Promise((resolve) => setTimeout(() => resolve(products), 300));

export const getProductById = (id) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(products.find((p) => p.id === id)), 300)
  );