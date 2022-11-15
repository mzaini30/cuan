import { defineConfig } from "npm:vite";
import { svelte } from "npm:@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    exclude: [
      "svelte/animate",
      "svelte/easing",
      "svelte/internal",
      "svelte/motion",
      "svelte/store",
      "svelte/transition",
      "svelte",
      "svelte-hmr/runtime/hot-api-esm.js",
      "svelte-hmr/runtime/proxy-adapter-dom.js",
      "svelte-hmr",
    ],
  },
});
