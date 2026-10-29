import React, { useEffect, useState } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "home/products";

import "./index.css";

export default function MiniCart() {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    const subscription = cart.subscribe((value) => setItems(value?.cartItems));
    return () => subscription.unsubscribe();
  }, []);

  const handleClearCart = () => {
    clearCart();
  };

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)}>
        <i className="ri-shopping-cart-2-fill text-2xl" id="showCart"></i>
        {items.length}
      </span>
      {showCart && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-md shadow-lg"
          style={{ width: 300, top: "4rem", right: "70px" }}
        >
          <div
            className="grid gap-3 text-sm"
            style={{ gridTemplateColumns: "1fr 3fr 10fr 2fr" }}
          >
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
          </div>
          {currency.format(
            items.reduce((acc, item) => acc + item.price * item.quantity, 0),
          )}
          <br />
          <br />
          <div className="flex">
            <div className="flex-grow">
              <button
                onClick={handleClearCart}
                className="bg-white text-green-900 py-2 px-5 rounded-md hover:text-white hover:bg-green-900 border border-green-900 mt-3"
                id="clearCart"
              >
                Clear Cart
              </button>
            </div>
            <div className="flex-end">
              <button
                onClick={handleClearCart}
                className="bg-green-900 text-white py-2 px-5 rounded-md hover:bg-white hover:text-green-900 border border-green-900 mt-3"
                id="clearCart"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
