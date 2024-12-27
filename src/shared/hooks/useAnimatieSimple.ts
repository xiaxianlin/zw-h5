import { useEffect } from "react";
import { useSpring, useSpringRef } from "@react-spring/web";

export const useFadeIn = (options?: AnmiateOptions) => {
  const { auto, onFinish, ...config } = options || {};
  const api = useSpringRef();
  const styles = useSpring({ ref: api, from: { opacity: 0 }, to: { opacity: 1 }, config, onRest: onFinish });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};

export const useFadeOut = (options?: AnmiateOptions) => {
  const { auto, onFinish, ...config } = options || {};
  const api = useSpringRef();
  const styles = useSpring({ ref: api, from: { opacity: 1 }, to: { opacity: 0 }, config, onRest: onFinish });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};

export const useExpandDown = (h: number, options?: AnmiateOptions) => {
  const { auto, ...config } = options || {};
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { clipPath: `inset(0 0 ${h}px 0)` },
    to: { clipPath: "inset(0 0 0px 0)" },
    config,
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};

export const useBreath = (options?: AnmiateOptions) => {
  const { auto, times, onFinish, ...config } = options || {};
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { scale: 0.95 },
    to: [{ scale: 1 }, { scale: 0.95 }],
    config,
    ...(times ? { repeat: times } : { loop: true }),
    onRest: onFinish,
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};
