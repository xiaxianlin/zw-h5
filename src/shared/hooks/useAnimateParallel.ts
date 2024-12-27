import { useEffect } from "react";
import { useSpring, useSpringRef } from "@react-spring/web";

export const useFadeInAndBreath = (options?: AnmiateOptions) => {
  const { auto, ...config } = options || {};
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
    config: { ...config, mass: 2, friction: 10, tension: 300 },
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};

export const useFadeInAndSlideX = (x: number, options?: AnmiateOptions) => {
  const { auto, ...config } = options || {};
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { opacity: 0, translateX: x },
    to: { opacity: 1, translateX: 0 },
    config: config,
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};

export const useFadeInAndSlideY = (y: number, options?: AnmiateOptions) => {
  const { auto, ...config } = options || {};
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { opacity: 0, translateY: y },
    to: { opacity: 1, translateY: 0 },
    config: config,
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};
