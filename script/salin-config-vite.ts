import { readFileSync, writeFileSync } from "https://deno.land/std/node/fs.ts";

let config = readFileSync("vite.config.mjs").toString();
config = config.replaceAll("npm:", "");
config = config.replace(/@\d{1,3}\.\d{1,3}\.\d{1,3}/g, "");
writeFileSync("vite-android.config.mjs", config);
