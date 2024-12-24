import styles from "./index.module.scss";
import { animated } from "@react-spring/web";

export function Block00() {
  return (
    <animated.div className={styles.block}>
      <animated.div className={styles.words}>
        <animated.div className={styles.wen} />
        <animated.div className={styles.yang} />
        <animated.div className={styles.li} />
        <animated.div className={styles.de} />
        <animated.div className={styles.song} />
        <animated.div className={styles.yun} />
      </animated.div>
      <animated.div className={styles.bird} />
      <animated.div className={styles.button}>
        <animated.div className={styles.icon} />
        <animated.div className={styles.start} />
      </animated.div>
      <animated.div className={styles.house} />
      <animated.div className={styles.line} />
    </animated.div>
  );
}
