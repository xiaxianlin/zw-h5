import { useMemo } from "react";
import { useAppModel } from "@shared/models/AppModel";

interface AssetElementProps extends ElementProps {
  width: number;
  height: number;
  assetKey: string;
  className?: string;
}
export function AssetElement({ width, height, assetKey, className, children }: AssetElementProps) {
  const { assets, toNum } = useAppModel();
  const asset = useMemo(() => assets[assetKey], [assets, assetKey]);

  return (
    <div
      className={className}
      style={{
        width: toNum(width),
        height: toNum(height),
        backgroundImage: `url(${asset})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
