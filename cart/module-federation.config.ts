export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js",
  dev: {
    disableHotTypesReload: true,
  },
  dts: {
    generateTypes: false,
  },
  shared: ["react", "react-dom"],
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    pdp: "pdp@http://localhost:3001/remoteEntry.js",
  },
  exposes: {
    "./cart": "./src/cart.jsx",
    "./Login": "./src/Login.jsx",
    "./MiniCart": "./src/MiniCart.jsx",
    "./CartContent": "./src/CartContent.jsx",
  },
};
