import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react],

  preview: {
    host: "0.0.0.0",
    allowedHosts: [
      "feisty-flow-production.up.railway.app"
    ]
  }
});