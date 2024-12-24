import { animated } from "@react-spring/web";
import { AssetElement } from "@shared/components";
import { useAppModel } from "@shared/models/AppModel";

interface BlockProps {}
export function Block01({}: BlockProps) {
  const { toRecord } = useAppModel();
  return (
    <AssetElement className="relative" assetKey="01lanhua-bg" width={750} height={1334}>
      <animated.div className="absolute" style={toRecord({ top: 162, right: 56 })}>
        <AssetElement assetKey="01lanhua-title" width={57} height={600} />
      </animated.div>

      <animated.div className="absolute" style={toRecord({ top: 70, left: 0 })}>
        <AssetElement assetKey="01lanhua-example" width={574} height={750} />
      </animated.div>
      <animated.div className="absolute" style={toRecord({ top: 571, left: 288 })}>
        <AssetElement assetKey="01lanhua-demo" width={289} height={459} />
      </animated.div>
      <animated.div className="absolute" style={toRecord({ top: 970, left: 44 })}>
        <AssetElement assetKey="01lanhua-intro" width={515} height={323} />
      </animated.div>
    </AssetElement>
  );
}
