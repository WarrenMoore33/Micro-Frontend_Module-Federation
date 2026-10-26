export const mfConfig = {
  name: "addtocart",
  filename: "remoteEntry.js",
  remotes: {
    cart: "cart@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./AddToCart": "./src/AddToCart.jsx",
    "./placeAddToCart": "./src/placeAddToCart.js",
  },
};
