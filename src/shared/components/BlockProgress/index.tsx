import styles from "./index.module.scss";
import { animated } from "@react-spring/web";
import { useProgress } from "@shared/hooks";

export function BlockProgress({ duration, onFinish }: { duration: number; onFinish?: () => void }) {
  const { progress, x } = useProgress(duration, { onFinish });
  return (
    <div className={styles.wrapper}>
      <div className={styles.progress}>
        <animated.div style={{ width: x.to((x) => `${x}%`) }} />
      </div>
      <div className={styles.counter}>{progress}%</div>
    </div>
  );
}
