import { ImageLoader } from "@shared/utils/image";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const useAppContainer = (params?: { width: number; mainAseets: AssetUrlMap; lazyAssets?: AssetUrlMap }) => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState<AssetBlobMap>({});

  const ratio = window.screen.width / (params?.width || 750);

  useEffect(() => {
    const { mainAseets = {}, lazyAssets = {} } = params || {};
    const mainCount = Object.keys(mainAseets).length;
    const lazyCount = Object.keys(lazyAssets).length;

    if (!mainCount) return;

    let cache: AssetBlobMap = {};
    let count = 0;
    ImageLoader.loadBlob(mainAseets).then((data) => {
      count += Object.keys(data).length;
      cache = { ...cache, ...data };
      setAssets(cache);
      setLoading(false);
      setLoaded(count === mainCount + lazyCount);
    });

    if (!lazyCount) return;
    ImageLoader.loadBlob(lazyAssets).then((data) => {
      cache = { ...cache, ...data };
      count += Object.keys(data).length;
      setAssets(cache);
      setLoaded(count === mainCount + lazyCount);
    });
  }, []);

  return { ratio, loaded, loading, assets };
};

export const AppModel = createContainer(useAppContainer);
export const useAppModel = AppModel.useContainer;
