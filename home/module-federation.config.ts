export const mfConfig = {
  name: "home",
  filename: "remoteEntry.js",
  remotes: {
    pdp: "pdp@http://localhost:3001/remoteEntry.js",
    cart: "cart@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./Header": "./src/Header.tsx",
    "./Footer": "./src/Footer.tsx",
    "./products": "./src/products.js",
    "./HomeContent": "./src/HomeContent.tsx",
  },
  shared: ["react", "react-dom"],
};
