import { animated } from "@react-spring/web";
import styles from "./index.module.scss";
import { sleep } from "@shared/utils";
import {
  useFadeIn,
  useFadeInAndBreath,
  useFadeInAndSlideX,
  useFadeInAndSlideY,
  useFadeInThenMoveY,
  useInViewOnce,
} from "@shared/hooks";
import { RESOURCE_URL } from "../resource";

export function Block04() {
  const example = useFadeInAndBreath({ duration: 1000 });
  const demo = useFadeInThenMoveY(5, { duration: 800 });
  const title = useFadeInAndSlideX(-30, { duration: 600 });
  const intro = useFadeInAndSlideY(10, { duration: 800 });
  const hua = useFadeIn({ duration: 800 });

  const [ref] = useInViewOnce(0.5, async () => {
    example.api.start();
    await sleep(1000);
    demo.api.start();
    await sleep(800);
    title.api.start();
    await sleep(600);
    intro.api.start();
    await sleep(200);
    hua.api.start();
  });

  return (
    <div ref={ref} className="block">
      <div className="bg">
        <animated.img src={`${RESOURCE_URL}/block04/bg.png`} />
      </div>
      <div className="content info-content">
        <animated.img className={styles.title} style={title.styles} src={`${RESOURCE_URL}/block04/title.png`} />
        <animated.img className={styles.example} style={example.styles} src={`${RESOURCE_URL}/block04/example.png`} />
        <animated.img className={styles.demo} style={demo.styles} src={`${RESOURCE_URL}/block04/demo.png`} />
        <animated.img className={styles.intro} style={intro.styles} src={`${RESOURCE_URL}/block04/intro.png`} />
        <animated.img className={styles.hua} style={hua.styles} src={`${RESOURCE_URL}/block04/hua.png`} />
      </div>
    </div>
  );
}
