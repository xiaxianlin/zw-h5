import { animated } from "@react-spring/web";
import styles from "./index.module.scss";
import { sleep } from "@shared/utils";
import {
  useFadeInAndBreath,
  useFadeInAndSlideX,
  useFadeInAndSlideY,
  useFadeInThenMoveY,
  useInViewOnce,
} from "@shared/hooks";

export function Block04() {
  const example = useFadeInAndBreath({ duration: 1000 });
  const demo = useFadeInThenMoveY(5, { duration: 800 });
  const title = useFadeInAndSlideX(-30, { duration: 600 });
  const intro = useFadeInAndSlideY(10, { duration: 800 });

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
    <div ref={ref} className="block">
      <div className="bg">
        <animated.img src="/resources/block04/bg.png" />
      </div>
      <div className="content info-content">
        <animated.img className={styles.title} style={title.styles} src="/resources/block04/title.png" />
        <animated.img className={styles.example} style={example.styles} src="/resources/block04/example.png" />
        <animated.img className={styles.demo} style={demo.styles} src="/resources/block04/demo.png" />
        <animated.img className={styles.intro} style={intro.styles} src="/resources/block04/intro.png" />
      </div>
    </div>
  );
}
