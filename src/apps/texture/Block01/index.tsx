import styles from "./index.module.scss";
import { animated, useSpring, useSpringRef } from "@react-spring/web";
import { useScrollListener } from "@shared/hooks";
import { useAppModel } from "@shared/models/AppModel";
import { sleep } from "@shared/utils";

export function Block01() {
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
    from: { clipPath: `inset(0 0 ${323 * ratio}px 0)` },
    to: { clipPath: "inset(0 0 0px 0)" },
    config: { duration: 1600 },
  });

  useScrollListener({
    point: (1335 / 1.5) * ratio,
    onTrigger: async () => {
      exampleSpringRef.start();
      await sleep(1000);
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
      <animated.div className={styles.example} style={exampleStyles} />
      <animated.div className={styles.demo} style={demoStyles} />
      <animated.div className={styles.intro} style={introStyles} />
    </animated.div>
  );
}
