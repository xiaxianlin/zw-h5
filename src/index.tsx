import React from "react";
import ReactDOM from "react-dom/client";
import VConsole from "vconsole";
import { DemoApp } from "@apps/demo";

import "./index.css";

new VConsole();

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>
);
