import { useAppModel } from "@shared/models/AppModel";
import { CSSProperties, useMemo } from "react";
import { animated } from "@react-spring/web";

interface AbsoluteElementProps extends ElementProps {
  x: number;
  y: number;
}
export function AbsoluteElement({ x, y, children }: AbsoluteElementProps) {
  const { ratio } = useAppModel();
  const computedStyle = useMemo<CSSProperties>(() => {
    return {
      position: "absolute",
      left: x * ratio,
      top: y * ratio,
    };
  }, [x, y]);

  return <animated.div style={computedStyle}>{children}</animated.div>;
}
