import type { CartItem, Product } from "@/types";
import { useState } from "react";

export default function useCart() {
    const [cart, setCart] = useState<CartItem[]>(JSON.parse(localStorage.getItem("cart") || "[]"));
    function agregarAlCarrito(product: Product) {
        const existe = cart.find((item) => item.id === product.id);
        if (existe) {
          setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
          localStorage.setItem("cart", JSON.stringify(cart));
        } 
        
        else {
          setCart([...cart, { ...product, quantity: 1 }]);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
    return { cart, agregarAlCarrito };
}
