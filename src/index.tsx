import React from "react";
import ReactDOM from "react-dom/client";
import VConsole from "vconsole";
import { DemoApp } from "@apps/demo";

import "./index.css";

new VConsole();

if (performance.memory) {
  console.log("JS堆使用内存:", performance.memory.usedJSHeapSize / 1024 / 1024, "MB");
  console.log("JS堆总内存:", performance.memory.totalJSHeapSize / 1024 / 1024, "MB");
  console.log("JS堆内存限制:", performance.memory.jsHeapSizeLimit / 1024 / 1024, "MB");
} else {
  console.log("当前环境不支持 performance.memory API");
}

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>
);
