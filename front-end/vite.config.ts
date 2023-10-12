import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import "dotenv/config";

const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      // Substitua as ocorrências de process.env.VITE_APP_BACKEND_URL pelo valor correspondente em .env
      "process.env.VITE_APP_BACKEND_URL": JSON.stringify(
        process.env.VITE_APP_BACKEND_URL
      ),
    }),
  ],
});
