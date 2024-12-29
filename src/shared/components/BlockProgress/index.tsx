import styles from "./index.module.scss";
import { animated, useSpringValue } from "@react-spring/web";

export function BlockProgress({ progress, onFinish }: { progress: number; onFinish?: () => void }) {
  const x = useSpringValue(0);
  x.start(progress, {
    config: { duration: 100, mass: 2, friction: 10, tension: 300 },
    onRest: () => {
      if (progress >= 100) {
        onFinish?.();
      }
    },
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.progress}>
        <animated.div style={{ width: x.to((x) => `${x}%`) }} />
      </div>
      <div className={styles.counter}>{progress}%</div>
    </div>
  );
}
