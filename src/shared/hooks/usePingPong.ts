import { useSpring, useSpringRef } from "@react-spring/web";

export const usePingPong = (start: number, end: number, options?: { duration: number }) => {
  const { duration = 300 } = options || {};
  const ref = useSpringRef();
  const { x } = useSpring({
    ref,
    from: { x: start },
    to: async (next) => {
      await next({ x: end });
      await next({ x: start });
    },
    config: { duration },
  });

  return { x, ref };
};
