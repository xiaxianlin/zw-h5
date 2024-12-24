import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginRem } from "@rsbuild/plugin-rem";

export default defineConfig({
  plugins: [pluginReact(), pluginSass(), pluginRem({ rootFontSize: 100, screenWidth: 750 })],
  html: {
    template: "./public/index.html",
  },
  resolve: {
    alias: {
      "@shared": "./src/shared",
      "@apps": "./src/apps",
    },
  },
  tools: {
    cssLoader: {
      url: {
        filter: (url) => {
          if (/images/.test(url)) {
            return false;
          }
          return true;
        },
      },
    },
  },
});
