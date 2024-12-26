import styles from "./index.module.scss";
import { animated } from "@react-spring/web";
import { sleep } from "@shared/utils";
import {
  useExpandDown,
  useFadeInAndBreath,
  useFadeInAndSlideX,
  useFadeInAndSlideY,
  useInViewOnce,
} from "@shared/hooks";
import { useAppModel } from "@apps/texture/model";

export function Block05() {
  const { ratio } = useAppModel();
  const example = useFadeInAndBreath({ duration: 800 });
  const demo = useFadeInAndSlideY(30, { duration: 800 });
  const title = useFadeInAndSlideX(20, { duration: 600 });
  const intro = useExpandDown(248 * ratio, { duration: 1200 });

  const [ref] = useInViewOnce(0.5, async () => {
    example.api.start();
    await sleep(1000);
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
