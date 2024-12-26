import { useAppModel } from "@shared/models/AppModel";
import styles from "./index.module.scss";
import { animated, useSpringValue, useTrail } from "@react-spring/web";
import { useEffect, useRef } from "react";

const items = [styles.yang, styles.li, styles.de, styles.song, styles.yun];

export function Block00() {
  const { loading, setLocked } = useAppModel();

  const counter = useRef(1);
  const wen = useSpringValue(0);
  const [words, wordsApi] = useTrail(items.length, () => ({ opacity: 0, transform: "translateY(800px)" }));
  const button = useSpringValue(0);
  const start = useSpringValue(window.screen.width);

  const handleTrailFinish = () => {
    counter.current++;
    if (counter.current === items.length - 2) {
      button.start(1, { config: { duration: 1000 } });
      start.start(0, { onRest: () => setLocked(false), config: { duration: 1200 } });
    }
  };

  useEffect(() => {
    if (loading) return;
    wen.start(1, { config: { duration: 750 } });
    setTimeout(() => {
      wordsApi.start({ opacity: 1, transform: "translateY(0)", onRest: handleTrailFinish });
    }, 250);
  }, [loading]);

  return (
    <animated.div className={styles.block}>
      <animated.div className={styles.words}>
        <animated.div className={styles.wen} style={{ opacity: wen }} />
        {words.map(({ transform, opacity }, i) => (
          <animated.div key={i} className={items[i]} style={{ transform, opacity }} />
        ))}
      </animated.div>
      <animated.div className={styles.bird} />
      <animated.div className={styles.button}>
        <animated.div className={styles.icon} style={{ opacity: button.to((x) => x) }} />
        <animated.div className={styles.start} style={{ transform: start.to((x) => `translateX(${x}px)`) }} />
      </animated.div>
      <animated.div className={styles.house} />
      <animated.div className={styles.line} />
    </animated.div>
  );
}
