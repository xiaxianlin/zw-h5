import { animated } from "@react-spring/web";
import styles from "./index.module.scss";

export function Block07() {
  return (
    <animated.div className={styles.block}>
      <animated.div className={styles.button} />
    </animated.div>
  );
}
