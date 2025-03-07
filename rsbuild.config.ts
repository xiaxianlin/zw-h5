import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginRem } from "@rsbuild/plugin-rem";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginSvgr(),
    pluginRem({ rootFontSize: 100, screenWidth: 750, maxRootFontSize: 100 }),
  ],
  html: {
    template: "./public/index.html",
  },
  resolve: {
    alias: {
      "@shared": "./src/shared",
      "@apps": "./src/apps",
    },
  },
  performance: {
    preload: {
      type: "all-chunks",
      include: [/.*\.png$/],
    },
    chunkSplit: {
      strategy: "split-by-size",
      maxSize: 50_000,
    },
  },
  source: {
    define: {
      _RESOURCE_URL_: JSON.stringify(process.env.RESOURCE_URL || "./textures"),
    },
  },
  output: {
    assetPrefix: "./",
  },
});
