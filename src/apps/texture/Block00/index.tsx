import { useAppModel } from "@apps/texture/model";
import styles from "./index.module.scss";
import { animated, useSpringValue, useTrail } from "@react-spring/web";
import { useEffect, useRef } from "react";

const items = ["yang", "li", "de", "song", "yun"];

export function Block00() {
  const { loaded } = useAppModel();

  const counter = useRef(1);
  const wen = useSpringValue(0);
  const [words, wordsApi] = useTrail(items.length, () => ({ opacity: 0, transform: "translateY(800px)" }));
  const button = useSpringValue(0);
  const start = useSpringValue(window.screen.width);

  const handleTrailFinish = () => {
    counter.current++;
    if (counter.current === items.length - 2) {
      button.start(1, { config: { duration: 1000 } });
      start.start(0, { config: { duration: 1000 } });
    }
  };

  useEffect(() => {
    if (!loaded) return;
    wen.start(1, { config: { duration: 750 } });
    setTimeout(() => {
      wordsApi.start({ opacity: 1, transform: "translateY(0)", onRest: handleTrailFinish });
    }, 250);
  }, [loaded]);

  return (
    <div className="block">
      <div className="bg">
        <animated.img src="/resources/block00/bg.png" />
      </div>
      <div className="content">
        <animated.div className={styles.words}>
          <animated.img className={styles.wen} style={{ opacity: wen }} src="/resources/block00/wen.png" />
          {words.map(({ transform, opacity }, i) => (
            <animated.img
              key={i}
              className={styles[items[i]]}
              style={{ transform, opacity }}
              src={`/resources/block00/${items[i]}.png`}
            />
          ))}
        </animated.div>
        <animated.img className={styles.bird} src="/resources/block00/bird.png" />
        <animated.div className={styles.button}>
          <animated.img
            className={styles.icon}
            style={{ opacity: button.to((x) => x) }}
            src="/resources/block00/button.png"
          />
          <animated.img
            className={styles.start}
            style={{ transform: start.to((x) => `translateX(${x}px)`) }}
            src="/resources/block00/start.png"
          />
        </animated.div>
        <animated.img className={styles.house} src="/resources/block00/house.png" />
        <animated.img className={styles.line} src="/resources/block00/line.png" />
      </div>
    </div>
  );
}
