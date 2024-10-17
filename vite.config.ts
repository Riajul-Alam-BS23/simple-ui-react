import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.tsx"),
      name: "SimpleUI",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {},
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ rollupTypes: true }),
    cssInjectedByJsPlugin(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
