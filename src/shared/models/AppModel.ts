import { ImageLoader } from "@shared/utils/image";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const useAppContainer = (params?: {
  width: number;
  dir: string;
  mainAssets: AssetUrlMap;
  lazyAssets?: AssetUrlMap;
}) => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState<AssetBlobMap>({});

  const ratio = window.screen.width / (params?.width || 750);

  const toNum = (record: number) => {
    return (record as number) * ratio;
  };

  const toRecord = (record: Record<string, number>) => {
    return Object.keys(record).reduce(
      (prev, key) => ({ ...prev, [key]: record[key] * ratio }),
      {} as Record<string, number>
    );
  };

  useEffect(() => {
    const { mainAssets = {}, lazyAssets = {}, dir = "" } = params || {};
    const mainCount = Object.keys(mainAssets).length;
    const lazyCount = Object.keys(lazyAssets).length;

    if (!mainCount) return;

    let cache: AssetBlobMap = {};
    let count = 0;
    ImageLoader.loadBlob(`/images/${dir}`, mainAssets).then((data) => {
      count += Object.keys(data).length;
      cache = { ...cache, ...data };
      setAssets(cache);
      setLoading(false);
      setLoaded(count === mainCount + lazyCount);
    });

    if (!lazyCount) return;
    ImageLoader.loadBlob(`/images/${dir}`, lazyAssets).then((data) => {
      cache = { ...cache, ...data };
      count += Object.keys(data).length;
      setAssets(cache);
      setLoaded(count === mainCount + lazyCount);
    });
  }, []);

  return { ratio, loaded, loading, assets, toNum, toRecord };
};

export const AppModel = createContainer(useAppContainer);
export const useAppModel = AppModel.useContainer;
