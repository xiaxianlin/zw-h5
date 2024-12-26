import styles from "./index.module.scss";
import { animated } from "@react-spring/web";
import { useAppModel } from "@shared/models/AppModel";
import { sleep } from "@shared/utils";
import {
  useFadeInThenBreath,
  useExpandDown,
  useFadeInAndSlideX,
  useFadeInAndRotate,
  useInViewOnce,
} from "@shared/hooks";

export function Block01() {
  const { ratio } = useAppModel();

  const example = useFadeInThenBreath({ duration: 800 });
  const demo = useFadeInAndRotate(2, 2, { duration: 800 });
  const title = useFadeInAndSlideX(-20, { duration: 600 });
  const intro = useExpandDown(323 * ratio, { duration: 1600 });

  const [ref] = useInViewOnce(0.5, async () => {
    example.api.start();
    await sleep(800);
    demo.api.start();
    await sleep(800);
    title.api.start();
    await sleep(600);
    intro.api.start();
  });

  return (
    <animated.div ref={ref} className={styles.block}>
      <animated.div className={styles.title} style={title.styles} />
      <animated.div className={styles.example} style={example.styles} />
      <animated.div className={styles.demo} style={demo.styles} />
      <animated.div className={styles.intro} style={intro.styles} />
    </animated.div>
  );
}
