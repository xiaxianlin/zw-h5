import { AssetElement } from "@shared/components";
import { AppLayout } from "@shared/layouts/AppLayout";
import { AppModel } from "@shared/models/AppModel";
import { Box1, Cat } from "./components";

export function DemoContent() {
  return (
    <div style={{ position: "relative" }}>
      <AssetElement width={750} height={8004} assetKey="bg" />

      <Box1 />
      <Cat />
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
