import { animated } from "@react-spring/web";
import styles from "./index.module.scss";
import { useAppModel } from "@apps/texture/model";
import { sleep } from "@shared/utils";
import {
  useFadeInAndBreath,
  useExpandDown,
  useFadeInAndSlideY,
  useInViewOnce,
  useFadeInThenMoveY,
} from "@shared/hooks";

export function Block02() {
  const { ratio } = useAppModel();

  const example = useFadeInAndBreath({ duration: 1200 });
  const demo = useFadeInThenMoveY(5, { duration: 1000 });
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
    <div ref={ref} className="block">
      <div className="bg">
        <animated.img src="/resources/block02/bg.png" />
      </div>
      <div className="content info-content">
        <animated.img className={styles.title} style={title.styles} src="/resources/block02/title.png" />
        <animated.img className={styles.example} style={example.styles} src="/resources/block02/example.png" />
        <animated.img className={styles.demo} style={demo.styles} src="/resources/block02/demo.png" />
        <animated.img className={styles.intro} style={intro.styles} src="/resources/block02/intro.png" />
      </div>
    </div>
  );
}
