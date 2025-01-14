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
  useFadeIn,
} from "@shared/hooks";
import { RESOURCE_URL } from "../resource";

export function Block02() {
  const { ratio } = useAppModel();

  const example = useFadeInAndBreath({ duration: 1200 });
  const demo = useFadeInThenMoveY(5, { duration: 1000 });
  const title = useFadeInAndSlideY(30, { duration: 800 });
  const intro = useExpandDown(253 * ratio, { duration: 1500 });
  const hua = useFadeIn({ duration: 600 });

  const [ref] = useInViewOnce(0.5, async () => {
    example.api.start();
    await sleep(1200);
    demo.api.start();
    await sleep(1000);
    title.api.start();
    await sleep(800);
    intro.api.start();
    await sleep(800);
    hua.api.start();
  });
  return (
    <div ref={ref} className="block">
      <div className="bg">
        <animated.img src={`${RESOURCE_URL}/block02/bg.png`} />
      </div>
      <div className="content info-content">
        <animated.img className={styles.title} style={title.styles} src={`${RESOURCE_URL}/block02/title.png`} />
        <animated.img className={styles.example} style={example.styles} src={`${RESOURCE_URL}/block02/example.png`} />
        <animated.img className={styles.demo} style={demo.styles} src={`${RESOURCE_URL}/block02/demo.png`} />
        <animated.img className={styles.intro} style={intro.styles} src={`${RESOURCE_URL}/block02/intro.png`} />
        <animated.img className={styles.hua} style={hua.styles} src={`${RESOURCE_URL}/block02/hua.png`} />
      </div>
    </div>
  );
}
