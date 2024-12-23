import { animated, useSpringValue } from "@react-spring/web";
import { AssetElement } from "@shared/components";
import { useScrollListener } from "@shared/hooks";
import { useAppModel } from "@shared/models/AppModel";

export const Cat = () => {
  const { ratio } = useAppModel();
  const left = useSpringValue(-400 * ratio);
  useScrollListener({
    point: 600,
    onTrigger: () => {
      left.start(0, { config: { duration: 500 } });
    },
  });
  return (
    <animated.div style={{ position: "absolute", left, top: 1000 }}>
      <AssetElement width={400} height={400} assetKey="cat" />
    </animated.div>
  );
};
