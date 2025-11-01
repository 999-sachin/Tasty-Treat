import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Configure esbuild to treat .js files as JSX so existing component files
// with a .js extension that contain JSX will be parsed correctly.
export default defineConfig({
  plugins: [react()],
  // This option helps esbuild transforms during dev to accept JSX in .js
  esbuild: {
    // Some versions accept a string loader for the transform step. Keep this
    // conservative and rely primarily on optimizeDeps.esbuildOptions.loader
    // below which is required when optimizing dependencies.
    include: /src\/.*\.[jt]sx?$/,
  },
  optimizeDeps: {
    esbuildOptions: {
      // Ensure esbuild treats .js files as JSX during dependency optimization
      // and when pre-bundling.
      loader: {
        ".js": "jsx",
      },
    },
  },
});
