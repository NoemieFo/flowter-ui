import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  base: "./",
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pictures": path.resolve(__dirname, "src/pictures"),
      "@application": path.resolve(__dirname, "src/application"),
      "@website": path.resolve(__dirname, "src/website"),
      "@common": path.resolve(__dirname, "src/common"),
    },
  },
}));
