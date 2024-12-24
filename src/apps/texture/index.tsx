import "./index.scss";
import { AppModel } from "@shared/models/AppModel";
import { Block00 } from "./Block00";
import { Block01 } from "./Block01";
import { Block02 } from "./Block02";
import { Block03 } from "./Block03";
import { Block04 } from "./Block04";
import { Block05 } from "./Block05";
import { Block06 } from "./Block06";
import { Block07 } from "./Block07";

function Content() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Block00 />
      <Block01 />
      <Block02 />
      <Block03 />
      <Block04 />
      <Block05 />
      <Block06 />
      <Block07 />
    </div>
  );
}

export function Texture() {
  return (
    <AppModel.Provider>
      <Content />
    </AppModel.Provider>
  );
}
