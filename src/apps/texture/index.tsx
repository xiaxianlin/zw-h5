import "./index.scss";
import { AppModel } from "@shared/models/AppModel";
import { Block00 } from "./components/Block00";
import { Block01 } from "./components/Block01";
import { Block02 } from "./components/Block02";
import { Block03 } from "./components/Block03";
import { Block04 } from "./components/Block04";
import { Block05 } from "./components/Block05";
import { Block06 } from "./components/Block06";
import { Block07 } from "./components/Block07";

const mainAssets = {
  "00kaishi-bg": "00kaishi/bg.png",
  "00kaishi-house": "01lanhua/house.png",
  "00kaishi-invite": "01lanhua/invite.png",
  "00kaishi-start": "01lanhua/start.png",
  "00kaishi-example": "01lanhua/example.png",
  "01lanhua-bg": "01lanhua/bg.png",
  "01lanhua-intro": "01lanhua/intro.png",
  "01lanhua-title": "01lanhua/title.png",
  "01lanhua-demo": "01lanhua/demo.png",
  "01lanhua-example": "01lanhua/example.png",
};

const lazyAssets = {
  "02lianhua-bg": "02lianhua/bg.png",
  "02lianhua-intro": "02lianhua/intro.png",
  "02lianhua-title": "02lianhua/title.png",
  "02lianhua-demo": "02lianhua/demo.png",
  "02lianhua-example": "02lianhua/example.png",
  "03canzhimudan-bg": "03canzhimudan/bg.png",
  "03canzhimudan-intro": "03canzhimudan/intro.png",
  "03canzhimudan-title": "03canzhimudan/title.png",
  "03canzhimudan-demo": "03canzhimudan/demo.png",
  "03canzhimudan-example": "03canzhimudan/example.png",
  "04yinianjing-bg": "04yinianjing/bg.png",
  "04yinianjing-intro": "04yinianjing/intro.png",
  "04yinianjing-title": "04yinianjing/title.png",
  "04yinianjing-demo": "04yinianjing/demo.png",
  "04yinianjing-example": "04yinianjing/example.png",
  "05badayun-bg": "05badayun/bg.png",
  "05badayun-intro": "05badayun/intro.png",
  "05badayun-title": "05badayun/title.png",
  "05badayun-demo": "05badayun/demo.png",
  "05badayun-example": "05badayun/example.png",
  "06luohualiushui-bg": "06luohualiushui/bg.png",
  "06luohualiushui-intro": "06luohualiushui/intro.png",
  "06luohualiushui-title": "06luohualiushui/title.png",
  "06luohualiushui-demo": "06luohualiushui/demo.png",
  "06luohualiushui-example": "06luohualiushui/example.png",
  "07anniu-bg": "07anniu/bg.png",
  "07anniu-button": "07anniu/button.png",
};

export function Texture() {
  return (
    <AppModel.Provider initialState={{ width: 750, dir: "texture", mainAssets, lazyAssets }}>
      <Content />
    </AppModel.Provider>
  );
}

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
