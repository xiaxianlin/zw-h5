import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginRem } from "@rsbuild/plugin-rem";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

// @ts-ignore
const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [pluginReact(), pluginSass(), pluginSvgr(), pluginRem({ rootFontSize: 100, screenWidth: 750 })],
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
  },
  source: {
    define: {
      _RESOURCE_URL_: JSON.stringify(isDev ? "/resources" : "https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources"),
    },
  },
});
