import { defineConfig } from "npm:vite";
import { svelte } from "npm:@sveltejs/vite-plugin-svelte";
import legacy from "npm:@vitejs/plugin-legacy";
import pages from "npm:vite-plugin-pages-svelte";
import Unocss from "npm:unocss/vite";
import transformerDirectives from "npm:@unocss/transformer-directives";

import "npm:svelte";

let plugins = [
  svelte(),
  pages(),
  Unocss({ transformers: [transformerDirectives()] }),
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode == "android") {
    return {
      plugins: [legacy(), ...plugins],
    };
  } else {
    return {
      plugins: [...plugins],
    };
  }
});
