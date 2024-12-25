import { animated, useSpring, useSpringRef } from "@react-spring/web";
import styles from "./index.module.scss";
import { useAppModel } from "@shared/models/AppModel";
import { useScrollListener } from "@shared/hooks";

export function Block07() {
  const { ratio } = useAppModel();
  const titleSpringRef = useSpringRef();
  const titleStyles = useSpring({
    ref: titleSpringRef,
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 600 },
  });
  useScrollListener({
    point: 1335 * 6 * ratio,
    onTrigger: async () => {
      titleSpringRef.start();
    },
  });
  return (
    <animated.div className={styles.block}>
      <animated.div className={styles.button} style={titleStyles} />
    </animated.div>
  );
}
