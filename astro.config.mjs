import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import spotlightjs from "@spotlightjs/astro";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

import astroGhostCMS from "@matthiesenxyz/astro-ghostcms";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,  
  site: "https://modafaku.com",
  output: "server",
  integrations: [
    mdx(), 
    sitemap(), 
    solidJs(), 
    tailwind({
    applyBaseStyles: false
    }), 
    spotlightjs(), 
    icon(), 
    astroGhostCMS({
      ghostURL: "https://ghost.modafaku.com",
      ThemeProvider: {
        disableThemeProvider: true,
      }
    })
  ],
},
})
})