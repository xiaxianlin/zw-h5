import React from "react";
import ReactDOM from "react-dom/client";
import VConsole from "vconsole";
import { Texture } from "@apps/texture";

import "./index.css";

new VConsole();

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Texture />
  </React.StrictMode>
);
