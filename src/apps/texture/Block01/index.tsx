import styles from "./index.module.scss";
import { animated } from "@react-spring/web";
import { useAppModel } from "@apps/texture/model";
import { sleep } from "@shared/utils";
import {
  useFadeInThenBreath,
  useExpandDown,
  useFadeInAndSlideX,
  useFadeInThenRotate,
  useInViewOnce,
  useFadeIn,
} from "@shared/hooks";
import { RESOURCE_URL } from "../resource";

export function Block01() {
  const { ratio } = useAppModel();

  const example = useFadeInThenBreath({ duration: 500, times: 2 });
  const demo = useFadeInThenRotate(3, { duration: 800 });
  const title = useFadeInAndSlideX(-20, { duration: 600 });
  const intro = useExpandDown(323 * ratio, { duration: 1600 });
  const hua = useFadeIn({ duration: 600 });

  const [ref] = useInViewOnce(0.5, async () => {
    example.api.start();
    await sleep(1500);
    demo.api.start();
    await sleep(800);
    title.api.start();
    await sleep(600);
    intro.api.start();
    await sleep(800);
    hua.api.start();
  });

  return (
    <div ref={ref} className="block">
      <div className="bg">
        <animated.img src={`${RESOURCE_URL}/block01/bg.png`} />
      </div>
      <div className="content info-content">
        <animated.img className={styles.title} style={title.styles} src={`${RESOURCE_URL}/block01/title.png`} />
        <animated.img className={styles.example} style={example.styles} src={`${RESOURCE_URL}/block01/example.png`} />
        <animated.img className={styles.demo} style={demo.styles} src={`${RESOURCE_URL}/block01/demo.png`} />
        <animated.img className={styles.intro} style={intro.styles} src={`${RESOURCE_URL}/block01/intro.png`} />
        <animated.img className={styles.hua} style={hua.styles} src={`${RESOURCE_URL}/block01/hua.png`} />
      </div>
    </div>
  );
}
