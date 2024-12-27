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
    <div ref={ref} className="block">
      <div className="bg">
        <animated.img src="/resources/block05/bg.png" />
      </div>
      <div className="content info-content">
        <animated.img className={styles.title} style={title.styles} src="/resources/block05/title.png" />
        <animated.img className={styles.example} style={example.styles} src="/resources/block05/example.png" />
        <animated.img className={styles.demo} style={demo.styles} src="/resources/block05/demo.png" />
        <animated.img className={styles.intro} style={intro.styles} src="/resources/block05/intro.png" />
      </div>
    </div>
  );
}
