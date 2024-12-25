import { animated, useSpring, useSpringRef } from "@react-spring/web";
import styles from "./index.module.scss";
import { useAppModel } from "@shared/models/AppModel";
import { useScrollListener } from "@shared/hooks";
import { sleep } from "@shared/utils";

export function Block04() {
  const { ratio } = useAppModel();
  const titleSpringRef = useSpringRef();
  const titleStyles = useSpring({
    ref: titleSpringRef,
    from: { opacity: 0, translateX: -30 },
    to: { opacity: 1, translateX: 0 },
    config: { duration: 600 },
  });

  const exampleSpringRef = useSpringRef();
  const exampleStyles = useSpring({
    ref: exampleSpringRef,
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 800 },
  });

  const demoSpringRef = useSpringRef();
  const demoStyles = useSpring({
    ref: demoSpringRef,
    from: { opacity: 0, translateY: 20 },
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
    point: 1335 * 3.5 * ratio,
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
