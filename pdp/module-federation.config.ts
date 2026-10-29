export const mfConfig = {
  name: "pdp",
  filename: "remoteEntry.js",
  dev: {
    disableHotTypesReload: true,
  },
  exposes: {
    "./PDPContent": "./src/PDPContent.jsx",
  },
  shared: ["react", "react-dom"],
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    cart: "cart@http://localhost:3002/remoteEntry.js",
    addtocart: "addtocart@http://localhost:3003/remoteEntry.js",
  },
};
