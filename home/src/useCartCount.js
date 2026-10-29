import { useState, useEffect } from "react";
import { cart } from "cart/cart";

export function useCartCount() {
  const [count, setCount] = useState(cart.value?.cartItems?.length ?? 0);

  useEffect(() => {
    cart.subscribe(({ cartItems }) => {
      setCount(cartItems?.length);
    });
  }, []);

  return count;
}
