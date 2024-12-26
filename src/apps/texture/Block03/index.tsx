import { animated } from "@react-spring/web";
import styles from "./index.module.scss";
import { sleep } from "@shared/utils";
import { useFadeInThenBlink, useFadeInAndSlideX, useFadeInAndSlideY, useInViewOnce } from "@shared/hooks";

export function Block03() {
  const example = useFadeInThenBlink(5, { duration: 800 });
  const demo = useFadeInAndSlideY(30, { duration: 800 });
  const title = useFadeInAndSlideX(30, { duration: 800 });
  const intro = useFadeInAndSlideY(10, { duration: 800 });

  const [ref] = useInViewOnce(0.5, async () => {
    example.api.start();
    await sleep(800);
    demo.api.start();
    await sleep(800);
    title.api.start();
    await sleep(800);
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
