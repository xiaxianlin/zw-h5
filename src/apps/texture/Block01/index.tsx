import styles from "./index.module.scss";
import { animated } from "@react-spring/web";
import { useAppModel } from "@apps/texture/model";
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

  const example = useFadeInThenBreath({ duration: 500 });
  const demo = useFadeInAndRotate(3, 2, { duration: 800 });
  const title = useFadeInAndSlideX(-20, { duration: 600 });
  const intro = useExpandDown(323 * ratio, { duration: 1600 });

  const [ref] = useInViewOnce(0.5, async () => {
    example.api.start();
    await sleep(1500);
    console.log("demo");
    demo.api.start();
    await sleep(800);
    title.api.start();
    await sleep(600);
    intro.api.start();
  });

  return (
    <div ref={ref} className="block">
      <div className="bg">
        <animated.img src="/resources/block01/bg.png" />
      </div>
      <div className="content info-content">
        <animated.img className={styles.title} style={title.styles} src="/resources/block01/title.png" />
        <animated.img className={styles.example} style={example.styles} src="/resources/block01/example.png" />
        <animated.img className={styles.demo} style={demo.styles} src="/resources/block01/demo.png" />
        <animated.img className={styles.intro} style={intro.styles} src="/resources/block01/intro.png" />
      </div>
    </div>
  );
}
