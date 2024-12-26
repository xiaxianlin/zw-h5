import styles from "./index.module.scss";
import { animated } from "@react-spring/web";
import { useAppModel } from "@apps/texture/model";
import { useProgress } from "@shared/hooks";

export function CircleProgress({
  size,
  center,
  stroke,
  duration,
  onFinish,
}: {
  size: number;
  stroke: number;
  duration: number;
  center?: React.ReactNode;
  onFinish?: () => void;
}) {
  const { ratio } = useAppModel();
  const circleSize = size * ratio;
  const circleStroke = stroke * ratio;
  const circleRadius = (circleSize - circleStroke) / 2;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const { progress, x } = useProgress(duration, { onFinish });

  return (
    <div className={styles.wrapper}>
      <div className={styles.progress}>
        <svg
          width={circleSize}
          height={circleSize}
          viewBox={`0 0 ${circleSize} ${circleSize}`}
          className={styles.circleProgress}
        >
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={circleRadius}
            strokeWidth={circleStroke}
            className={styles.circleBackground}
          />
          <animated.circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={circleRadius}
            strokeWidth={circleStroke}
            className={styles.circleValue}
            strokeDasharray={circleCircumference}
            strokeDashoffset={x.to((p) => circleCircumference * (1 - p / 100))}
          />
        </svg>
        {center ? <div className={styles.center}>{center}</div> : null}
      </div>
      <div className={styles.counter}>{progress}%</div>
    </div>
  );
}
