import { animated } from "@react-spring/web";
import styles from "./index.module.scss";
import { useAppModel } from "@apps/texture/model";
import { sleep } from "@shared/utils";
import { useFadeInAndBreath, useExpandDown, useFadeInAndSlideY, useInViewOnce } from "@shared/hooks";

export function Block02() {
  const { ratio } = useAppModel();

  const example = useFadeInAndBreath({ duration: 1200 });
  const demo = useFadeInAndSlideY(30, { duration: 1000 });
  const title = useFadeInAndSlideY(30, { duration: 800 });
  const intro = useExpandDown(253 * ratio, { duration: 1500 });

  const [ref] = useInViewOnce(0.5, async () => {
    example.api.start();
    await sleep(1200);
    demo.api.start();
    await sleep(1000);
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
