import React, { useEffect, useState } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products";

export default function CartContent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const subscription = cart.subscribe((value) =>
      setItems(value?.cartItems ?? []),
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.price * item.quantity)}
            </div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right">
          {currency.format(
            items.reduce((acc, item) => acc + item.price * item.quantity, 0),
          )}
        </div>
      </div>
      {items.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div className="flex mb-10">
          <div className="flex-grow">
            <button
              onClick={clearCart}
              className="bg-white text-green-900 py-2 px-5 rounded-md hover:text-white hover:bg-green-900 border border-green-900 mt-3"
              id="clearCart"
            >
              Clear Cart
            </button>
          </div>
          <div className="flex-end">
            <button
              className="bg-green-900 text-white py-2 px-5 rounded-md hover:bg-white hover:text-green-900 border border-green-900 mt-3"
              id="clearCart"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
