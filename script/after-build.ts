import { readFileSync, writeFileSync } from "https://deno.land/std/node/fs.ts";

let content = readFileSync("dist/index.html").toString();
content = content
  .replace(/<script nomodule/g, "<script")
  .replace(/type=.module./g, "type=nothing");
writeFileSync("dist/index.html", content);
