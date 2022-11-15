import { defineConfig } from "npm:vite";
import { svelte } from "npm:@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
});
