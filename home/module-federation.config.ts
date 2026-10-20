export const mfConfig = {
  name: "home",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/Header.tsx",
    "./Footer": "./src/Footer.tsx",
    "./products": "./src/products.js",
  },
  shared: ["react", "react-dom"],
};
