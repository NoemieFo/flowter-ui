// vite.config.ts
import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

const path = require("path");
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
});
