import { useAppModel } from "@apps/texture/model";
import styles from "./index.module.scss";
import { animated, useTrail } from "@react-spring/web";
import { useEffect } from "react";
import { useFadeIn, useFadeInAndSlideY, useFadeInThenBreath } from "@shared/hooks";
import { sleep } from "@shared/utils";
import { RESOURCE_URL } from "../resource";

const items = ["yang", "li", "de", "song", "yun"];

export function Block00({ onStart }: { onStart?: () => void }) {
  const { loaded } = useAppModel();

  const wen = useFadeIn({ duration: 750 });

  const button = useFadeInThenBreath({ duration: 750 });
  const start = useFadeInAndSlideY(30, { duration: 750 });
  const [words, wordsApi] = useTrail(items.length, () => ({
    opacity: 0,
    transform: "translateY(800px)",
  }));

  useEffect(() => {
    if (!loaded) return;
    (async () => {
      wen.api.start();
      await sleep(250);
      wordsApi.start({ opacity: 1, transform: "translateY(0)", config: { duration: 300 } });
      await sleep(1500);
      button.api.start();
      await sleep(200);
      start.api.start();
    })();
  }, [loaded]);

  return (
    <div className="block">
      <div className="bg">
        <animated.img src={`${RESOURCE_URL}/block00/bg.png`} />
      </div>
      <div className="content">
        <animated.div className={styles.words}>
          <animated.img className={styles.wen} style={wen.styles} src={`${RESOURCE_URL}/block00/wen.png`} />
          {words.map(({ transform, opacity }, i) => (
            <animated.img
              key={i}
              className={styles[items[i]]}
              style={{ transform, opacity }}
              src={`${RESOURCE_URL}/block00/${items[i]}.png`}
            />
          ))}
        </animated.div>
        <animated.img className={styles.bird} src={`${RESOURCE_URL}/block00/bird.png`} />
        <animated.div className={styles.button}>
          <animated.img
            className={styles.icon}
            style={button.styles}
            src={`${RESOURCE_URL}/block00/button.png`}
            onClick={onStart}
          />
          <animated.img className={styles.start} style={start.styles} src={`${RESOURCE_URL}/block00/start.png`} />
        </animated.div>
        <animated.img className={styles.house} src={`${RESOURCE_URL}/block00/house.png`} />
        <animated.img className={styles.line} src={`${RESOURCE_URL}/block00/line.png`} />
      </div>
    </div>
  );
}
