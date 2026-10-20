export const mfConfig = {
  name: "cart",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
    pdp: "pdp@http://localhost:3001/remoteEntry.js",
  },
};
