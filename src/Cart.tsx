import useCart from "./hooks/useCart";
import type { CartItem } from "./types";

export default function Cart() {
const { cart } = useCart();
    return (  
        <div>
            <h1>Carrito de compras</h1>
              {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Cantidad: {item.quantity}</p>
        </div>
      ))}
        </div>
    );
}

