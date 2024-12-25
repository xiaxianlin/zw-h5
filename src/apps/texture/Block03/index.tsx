import { animated } from "@react-spring/web";
import styles from "./index.module.scss";

export function Block03() {
  return (
    <animated.div className={styles.block}>
      <animated.div className={styles.title} />
      <animated.div className={styles.example} />
      <animated.div className={styles.demo} />
      <animated.div className={styles.intro} />
    </animated.div>
  );
}
