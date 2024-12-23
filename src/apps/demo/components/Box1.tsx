import { animated, useSpringValue } from "@react-spring/web";
import { useScrollListener } from "@shared/hooks";

export const Box1 = () => {
  const right = useSpringValue(-100);
  useScrollListener({
    point: 300,
    onTrigger: () => {
      right.start(0);
    },
  });
  return (
    <animated.div
      style={{
        position: "absolute",
        right,
        top: 600,
        width: 100,
        height: 100,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: 700,
        color: "#fff",
      }}
    >
      Hello World
    </animated.div>
  );
};
