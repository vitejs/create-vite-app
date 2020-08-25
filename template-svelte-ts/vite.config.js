import sveltePlugin from "vite-plugin-svelte";
import autoPreprocess from "svelte-preprocess";

export default {
  plugins: [sveltePlugin({ preprocess: autoPreprocess() })],
  rollupDedupe: ["svelte"]
};
