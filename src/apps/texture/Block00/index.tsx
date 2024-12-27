import { useAppModel } from "@apps/texture/model";
import styles from "./index.module.scss";
import { animated, useTrail } from "@react-spring/web";
import { useEffect } from "react";
import { useFadeIn, useFadeInAndSlideY } from "@shared/hooks";
import { sleep } from "@shared/utils";

const items = ["yang", "li", "de", "song", "yun"];

export function Block00() {
  const { loaded } = useAppModel();

  const wen = useFadeIn({ duration: 750 });

  const button = useFadeIn({ duration: 750 });
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
        <animated.img src="https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources/block00/bg.png" />
      </div>
      <div className="content">
        <animated.div className={styles.words}>
          <animated.img className={styles.wen} style={wen.styles} src="https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources/block00/wen.png" />
          {words.map(({ transform, opacity }, i) => (
            <animated.img
              key={i}
              className={styles[items[i]]}
              style={{ transform, opacity }}
              src={`https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources/block00/${items[i]}.png`}
            />
          ))}
        </animated.div>
        <animated.img className={styles.bird} src="https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources/block00/bird.png" />
        <animated.div className={styles.button}>
          <animated.img className={styles.icon} style={button.styles} src="https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources/block00/button.png" />
          <animated.img className={styles.start} style={start.styles} src="https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources/block00/start.png" />
        </animated.div>
        <animated.img className={styles.house} src="https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources/block00/house.png" />
        <animated.img className={styles.line} src="https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources/block00/line.png" />
      </div>
    </div>
  );
}
