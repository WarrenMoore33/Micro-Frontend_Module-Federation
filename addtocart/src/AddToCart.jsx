import { createEffect, createSignal, Show } from "solid-js";

import { jwt, addToCart } from "cart/cart";

export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((jwt) => {
      setLoggedIn(!!jwt);
    });
  });

  return (
    <Show
      when={loggedIn()}
      fallback={
        <button
          class="bg-green-900 text-white py-2 px-5 rounded-md hover:bg-white hover:text-green-900 border border-green-900 mt-3"
          onClick={() => (window.location.href = "/login")}
        >
          Login to Add to Cart
        </button>
      }
    >
      <button
        class="bg-green-900 text-white py-2 px-5 rounded-md hover:bg-white hover:text-green-900 border border-green-900 mt-3"
        onClick={() => addToCart(id)}
      >
        Add to Cart
      </button>
    </Show>
  );
};
