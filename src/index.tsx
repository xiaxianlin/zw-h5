import React from "react";
import ReactDOM from "react-dom/client";
import { DemoApp } from "@apps/demo";

import "./index.css";

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>
);
