import { useAppModel } from "@shared/models/AppModel";
import { animated } from "@react-spring/web";

interface SizedElementProps extends ElementProps {
  width: number;
  height: number;
}
export function SizedElement({ width, height, children }: SizedElementProps) {
  const { ratio } = useAppModel();

  return <animated.div style={{ width: width * ratio, height: height * ratio }}>{children}</animated.div>;
}
