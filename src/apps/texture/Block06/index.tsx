import { animated } from "@react-spring/web";
import styles from "./index.module.scss";
import { useAppModel } from "@shared/models/AppModel";
import { sleep } from "@shared/utils";
import { useExpandDown, useFadeIn, useFadeInAndSlideX, useFadeInAndRotate, useInViewOnce } from "@shared/hooks";

export function Block06() {
  const { ratio } = useAppModel();
  const example = useFadeIn({ duration: 800 });
  const demo = useFadeInAndRotate(2, 2, { duration: 800 });
  const title = useFadeInAndSlideX(-20, { duration: 600 });
  const intro = useExpandDown(370 * ratio, { duration: 1500 });

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
