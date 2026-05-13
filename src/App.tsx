import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
