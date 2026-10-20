export const mfConfig = {
  name: "pdp",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
  },
};
