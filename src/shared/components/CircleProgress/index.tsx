import styles from "./index.module.scss";
import { animated, useSpringValue } from "@react-spring/web";
import { useAppModel } from "@apps/texture/model";

export function CircleProgress({
  size,
  center,
  stroke,
  progress,
  onFinish,
}: {
  size: number;
  stroke: number;
  progress: number;
  center?: React.ReactNode;
  onFinish?: () => void;
}) {
  const { ratio } = useAppModel();
  const circleSize = size * ratio;
  const circleStroke = stroke * ratio;
  const circleRadius = (circleSize - circleStroke) / 2;
  const circleCircumference = 2 * Math.PI * circleRadius;

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
