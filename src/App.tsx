import { useEffect, useState } from "react";
import type { CartItem, Product } from "./types";
import useCart from "./hooks/useCart";



function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const { cart, agregarAlCarrito } = useCart();
  


  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
      return;
    }
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [selectedCategory]);


  return (
    <>
      <label>
        Categorias:
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button onClick={() => agregarAlCarrito(product)}>
            Agregar al carrito
          </button>
        </div>
      ))}

    </>
  );
}

export default App;
