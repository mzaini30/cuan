import App from "./App.svelte";
import "npm:@unocss/reset/tailwind.css";
import "uno.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
