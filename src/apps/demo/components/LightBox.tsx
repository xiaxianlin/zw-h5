import { animated, useSpringValue } from "@react-spring/web";
import { usePingPong, useScrollListener } from "@shared/hooks";
import { useAppModel } from "@shared/models/AppModel";

export const LightBox = () => {
  const { transfer } = useAppModel();
  const width = transfer(400);
  const left = useSpringValue(-width);

  const { x, ref } = usePingPong(0.5, 1, { duration: 1000 });

  useScrollListener({
    point: 2000 - window.screen.width,
    onTrigger: () => {
      left.start(0, {
        config: { duration: 500 },
        onRest: () => ref.start(),
      });
    },
  });
  return (
    <animated.div
      className="flex-center"
      style={{ position: "absolute", left, top: 2000, width, height: 200, background: "#000" }}
    >
      <animated.div style={{ fontSize: 36, fontWeight: 900, color: "#fff", opacity: x }}>High Light</animated.div>
    </animated.div>
  );
};
