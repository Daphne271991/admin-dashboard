import { defineConfig } from "vite";
const path = require("path");

module.exports = {
  plugins: [
    // other plugins
  ],
  build: {
    target: "esnext",
    minify: true,
    assetsDir: "dist",
    css: ["./src/assets/styles/main.scss", "./src/pages/users/Users.scss"],
  },
};
