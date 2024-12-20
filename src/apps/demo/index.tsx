import { AssetBox } from "@shared/components/AssetBox";
import { AppLayout } from "@shared/layouts/AppLayout";
import { AppModel } from "@shared/models/AppModel";

export const DemoContent = () => {
  return (
    <div>
      <AssetBox name="bg" width="100%" />
    </div>
  );
};

export const DemoApp = () => {
  return (
    <AppModel.Provider initialState={{ mainAseets: { bg: "./images/demo.jpg" } }}>
      <AppLayout>
        <DemoContent />
      </AppLayout>
    </AppModel.Provider>
  );
};
