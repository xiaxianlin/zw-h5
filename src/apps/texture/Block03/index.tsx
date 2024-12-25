import { animated, useSpring, useSpringRef } from "@react-spring/web";
import styles from "./index.module.scss";
import { useAppModel } from "@shared/models/AppModel";
import { useScrollListener } from "@shared/hooks";
import { sleep } from "@shared/utils";

export function Block03() {
  const { ratio } = useAppModel();
  const titleSpringRef = useSpringRef();
  const titleStyles = useSpring({
    ref: titleSpringRef,
    from: { opacity: 0, translateX: -20 },
    to: { opacity: 1, translateX: 0 },
    config: { duration: 600 },
  });

  const exampleSpringRef = useSpringRef();
  const exampleStyles = useSpring({
    ref: exampleSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  });
  const exampleSpringRef1 = useSpringRef();
  const exampleStyles1 = useSpring({
    ref: exampleSpringRef1,
    from: { filter: "brightness(100%)" },
    to: async (next) => {
      while (true) {
        await next({ filter: "brightness(110%)" });
        await next({ filter: "brightness(100%)" });
      }
    },
    config: { duration: 2500 },
  });

  const demoSpringRef = useSpringRef();
  const demoStyles = useSpring({
    ref: demoSpringRef,
    from: { opacity: 0, translateY: 30 },
    to: { opacity: 1, translateY: 0 },
    config: { duration: 800 },
  });

  const introSpringRef = useSpringRef();
  const introStyles = useSpring({
    ref: introSpringRef,
    from: { opacity: 0, translateY: 10 },
    to: { opacity: 1, translateY: 0 },
    config: { duration: 800 },
  });

  useScrollListener({
    point: 1335 * 2.5 * ratio,
    onTrigger: async () => {
      exampleSpringRef.start();
      await sleep(1000);
      exampleSpringRef1.start();
      demoSpringRef.start();
      await sleep(800);
      titleSpringRef.start();
      await sleep(800);
      introSpringRef.start();
    },
  });
  return (
    <animated.div className={styles.block}>
      <animated.div className={styles.title} style={titleStyles} />
      <animated.div className={styles.example} style={{ ...exampleStyles, ...exampleStyles1 }} />
      <animated.div className={styles.demo} style={demoStyles} />
      <animated.div className={styles.intro} style={introStyles} />
    </animated.div>
  );
}
