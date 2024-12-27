import ReactDOM from "react-dom/client";
import { Texture } from "@apps/texture";

import "./index.css";

const doc = document.documentElement;
doc.style.fontSize = (doc.clientWidth / 750) * 100 + "px";

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(<Texture />);
