import "./index.scss";
import { AppModel, useAppModel } from "@shared/models/AppModel";
import { Block00 } from "./Block00";
import { Block01 } from "./Block01";
import { Block02 } from "./Block02";
import { Block03 } from "./Block03";
import { Block04 } from "./Block04";
import { Block05 } from "./Block05";
import { Block06 } from "./Block06";
import { Block07 } from "./Block07";
import { Loading } from "./Loading";

function Content() {
  const { loading } = useAppModel();
  return (
    <>
      {loading && <Loading />}
      <div style={{ position: "relative", overflow: "hidden", height: loading ? "100vh" : "auto" }}>
        <Block00 />
        <Block01 />
        <Block02 />
        <Block03 />
        <Block04 />
        <Block05 />
        <Block06 />
        <Block07 />
      </div>
    </>
  );
}

export function Texture() {
  return (
    <AppModel.Provider>
      <Content />
    </AppModel.Provider>
  );
}
