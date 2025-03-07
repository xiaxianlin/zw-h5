import { animated } from "@react-spring/web";
import styles from "./index.module.scss";
import { sleep } from "@shared/utils";
import {
  useFadeInThenBlink,
  useFadeInAndSlideX,
  useFadeInAndSlideY,
  useInViewOnce,
  useFadeInThenMoveY,
  useFadeIn,
} from "@shared/hooks";
import { RESOURCE_URL } from "../resource";

export function Block03() {
  const example = useFadeInThenBlink({ duration: 800 });
  const demo = useFadeInThenMoveY(5, { duration: 1000 });
  const title = useFadeInAndSlideX(30, { duration: 800 });
  const intro = useFadeInAndSlideY(10, { duration: 800 });
  const hua = useFadeIn({ duration: 600 });

  const [ref] = useInViewOnce(0.5, async () => {
    example.api.start();
    await sleep(800);
    demo.api.start();
    await sleep(800);
    title.api.start();
    await sleep(800);
    intro.api.start();
    await sleep(400);
    hua.api.start();
  });

  return (
    <div ref={ref} className="block">
      <div className="bg">
        <animated.img src={`${RESOURCE_URL}/block03/bg.png`} />
      </div>
      <div className="content info-content">
        <animated.img className={styles.title} style={title.styles} src={`${RESOURCE_URL}/block03/title.png`} />
        <animated.img className={styles.example} style={example.styles} src={`${RESOURCE_URL}/block03/example.png`} />
        <animated.img className={styles.demo} style={demo.styles} src={`${RESOURCE_URL}/block03/demo.png`} />
        <animated.img className={styles.intro} style={intro.styles} src={`${RESOURCE_URL}/block03/intro.png`} />
        <animated.img className={styles.hua} style={hua.styles} src={`${RESOURCE_URL}/block03/hua.png`} />
      </div>
    </div>
  );
}
