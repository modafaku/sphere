import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://modafaku.com",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({
    applyBaseStyles: false
  }), sentry(), spotlightjs(), icon()],
  output: "server",
  adapter: cloudflare()
});