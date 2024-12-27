import { useEffect } from "react";
import { useSpring, useSpringRef } from "@react-spring/web";

export const useFadeInThenBreath = (options?: AnmiateOptions) => {
  const { auto, times, ...config } = options || {};

  const nextApi = useSpringRef();
  const nextStyles = useSpring({
    ref: nextApi,
    from: { scale: 1 },
    to: [{ scale: 1.05 }, { scale: 1 }],
    ...(times ? { repeat: times } : { loop: true }),
    config: { duration: 500 },
  });

  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config,
    onRest: () => nextApi.start(),
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles: { ...styles, ...nextStyles }, api };
};

export const useFadeInThenRotate = (d: number, options?: AnmiateOptions) => {
  const { auto, times, ...config } = options || {};

  const nextApi = useSpringRef();
  const nextStyles = useSpring({
    ref: nextApi,
    from: { rotate: 0 },
    to: [{ rotate: -d }, { rotate: 0 }, { rotate: d }, { rotate: 0 }],
    ...(times ? { repeat: times } : { loop: true }),
    config: { duration: 300 },
  });

  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config,
    onRest: () => nextApi.start(),
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles: { ...styles, ...nextStyles }, api };
};

export const useFadeInThenMoveY = (d: number, options?: AnmiateOptions) => {
  const { auto, times, ...config } = options || {};

  const nextApi = useSpringRef();
  const nextStyles = useSpring({
    ref: nextApi,
    from: { translateY: 0 },
    to: [{ translateY: -d }, { translateY: 0 }, { translateY: d }, { translateY: 0 }],
    ...(times ? { repeat: times } : { loop: true }),
    config: { duration: 300 },
  });

  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config,
    onRest: () => nextApi.start(),
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles: { ...styles, ...nextStyles }, api };
};

export const useFadeInThenBlink = (options?: AnmiateOptions) => {
  const { auto, times, ...config } = options || {};

  const nextApi = useSpringRef();
  const nextStyles = useSpring({
    ref: nextApi,
    from: { filter: "brightness(100%)" },
    to: [{ filter: "brightness(105%)" }, { filter: "brightness(100%)" }],
    ...(times ? { repeat: times } : { loop: true }),
    config: { mass: 2 },
  });

  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config,
    onRest: () => nextApi.start(),
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles: { ...styles, ...nextStyles }, api };
};
