import { useEffect } from "react";
import { useSpring, useSpringRef } from "@react-spring/web";

export const useFadeInThenBreath = (options?: AnmiateOptions) => {
  const { auto, times, ...config } = options || {};

  const nextApi = useSpringRef();
  const nextStyles = useSpring({
    ref: nextApi,
    from: { scale: 1 },
    to: async (next) => {
      const run = async () => {
        await next({ scale: 1.05 });
        await next({ scale: 1 });
      };
      if (times) {
        for (let i = 0; i < times; i++) {
          await run();
        }
      } else {
        while (true) {
          await run();
        }
      }
    },
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
    to: async (next) => {
      const run = async () => {
        await next({ rotate: -d });
        await next({ rotate: 0 });
        await next({ rotate: d });
        await next({ rotate: 0 });
      };
      if (times) {
        for (let i = 0; i < times; i++) {
          await run();
        }
      } else {
        while (true) {
          await run();
        }
      }
    },
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
    to: async (next) => {
      const run = async () => {
        await next({ translateY: -d });
        await next({ translateY: 0 });
        await next({ translateY: d });
        await next({ translateY: 0 });
      };
      if (times) {
        for (let i = 0; i < times; i++) {
          await run();
        }
      } else {
        while (true) {
          await run();
        }
      }
    },
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
    to: async (next) => {
      const run = async () => {
        await next({ filter: "brightness(105%)" });
        await next({ filter: "brightness(100%)" });
      };
      if (times) {
        for (let i = 0; i < times; i++) {
          await run();
        }
      } else {
        while (true) {
          await run();
        }
      }
    },
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
