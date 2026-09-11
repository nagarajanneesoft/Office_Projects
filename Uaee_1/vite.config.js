import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/uatmioot/uidesign/React/CVUAE_Form/form",
  server: {
    historyApiFallback: true,
  },
});
