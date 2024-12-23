import { useMemo } from "react";
import { useAppModel } from "@shared/models/AppModel";
import { SizedElement } from "../SizedElement";

interface AssetElementProps extends ElementProps {
  width: number;
  height: number;
  assetKey: string;
}
export function AssetElement({ assetKey, ...props }: AssetElementProps) {
  const { assets } = useAppModel();
  const asset = useMemo(() => assets[assetKey], [assets, assetKey]);

  return (
    <SizedElement {...props}>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${asset})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </SizedElement>
  );
}
