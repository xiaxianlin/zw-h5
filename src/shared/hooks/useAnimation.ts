import { SpringConfig, useSpring, useSpringRef } from "@react-spring/web";
import { useEffect, useRef } from "react";

type Options = {
  auto?: boolean;
} & SpringConfig;

export const useFadeIn = (options?: Options) => {
  const { auto, ...config } = options || {};
  const api = useSpringRef();
  const styles = useSpring({ ref: api, from: { opacity: 0 }, to: { opacity: 1 }, config });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};

export const useFadeInAndBreath = (options?: Options) => {
  const { auto, ...config } = options || {};
  const api = useSpringRef();
  const styles = useSpring({ ref: api, from: { opacity: 0, scale: 0.9 }, to: { opacity: 1, scale: 1 }, config });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};

export const useFadeInThenBreath = (options?: Options) => {
  const { auto, ...config } = options || {};
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { opacity: 0, scale: 1 },
    to: [{ opacity: 1, scale: 1 }, { scale: 1.1 }, { scale: 1 }],
    config,
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};

export const useFadeInAndSlideX = (x: number, options?: Options) => {
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

export const useFadeInAndSlideY = (y: number, options?: Options) => {
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

export const useExpandDown = (h: number, options?: Options) => {
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

export const useFadeInAndRotate = (d: number, times = 1, options?: Options) => {
  const { auto, ...config } = options || {};

  const to = new Array(times)
    .fill(0)
    .map(() => [
      { opacity: 1, rotate: -d },
      { opacity: 1, rotate: 0 },
      { opacity: 1, rotate: d },
      { opacity: 1, rotate: 0 },
    ])
    .flat();

  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { opacity: 0, rotate: 0 },
    to,
    config: config,
    onRest: () => {},
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles, api };
};

export const useFadeInThenBlink = (times: number, options?: Options) => {
  const { auto, ...config } = options || {};

  const counter = useRef(0);

  const blinkApi = useSpringRef();
  const blinkStlyes = useSpring({
    ref: blinkApi,
    from: { filter: "brightness(100%)" },
    to: async (next) => {
      while (counter.current < times) {
        await next({ filter: "brightness(105%)" });
        await next({ filter: "brightness(100%)" });
        counter.current++;
      }
      await next({ filter: "brightness(100%)" });
    },
    config: { mass: 2, friction: 20, tension: 200, duration: 600 },
  });

  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config,
    onRest: () => blinkApi.start(),
  });

  useEffect(() => {
    auto && api.start();
  }, [auto]);

  return { styles: { ...styles, ...blinkStlyes }, api };
};
