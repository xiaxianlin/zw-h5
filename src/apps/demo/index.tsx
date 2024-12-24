import { AssetElement } from "@shared/components";
import { AppLayout } from "@shared/layouts/AppLayout";
import { AppModel } from "@shared/models/AppModel";
import { Box1, Cat, LightBox } from "./components";

export function DemoContent() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <AssetElement width={750} height={8004} assetKey="bg" />
      <div className="absolute" style={{ zIndex: 10, top: 0, left: 50 }}>
        下滑有动画
      </div>
      <Box1 />
      <Cat />
      <LightBox />
    </div>
  );
}

export function DemoApp() {
  return (
    <AppModel.Provider initialState={{ width: 750, mainAssets: { cat: "./images/cat.png" } }}>
      <AppLayout>
        <DemoContent />
      </AppLayout>
    </AppModel.Provider>
  );
}
