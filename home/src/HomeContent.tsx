import React, { useState, useEffect } from "react";

import { getProducts, currency } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";
import { Link } from "react-router-dom";

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map(
        (product: {
          id: string;
          image: string;
          name: string;
          price: string;
          description: string;
        }) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`} id={`pdp_${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="flex">
              <div className="flex-grow font-bold">
                <Link to={`/product/${product.id}`} id={`pdp_${product.id}`}>
                  {product.name}
                </Link>
              </div>
              <div className="flex-end">{currency.format(product.price)}</div>
            </div>
            <div className="description">{product.description}</div>
            {loggedIn && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add to Cart
              </button>
            )}
          </div>
        ),
      )}
    </div>
  );
}
