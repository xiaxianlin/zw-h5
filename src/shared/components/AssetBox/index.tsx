import { useAppModel } from "@shared/models/AppModel";
import { useMemo } from "react";

export function AssetBox({ name, width, height }: { name: string; width?: string | number; height?: string | number }) {
  const { assets } = useAppModel();

  const asset = useMemo(() => assets[name], [assets, name]);

  return <img src={asset} width={width} height={height} />;
}
