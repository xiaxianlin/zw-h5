import { animated } from "@react-spring/web";
import styles from "./index.module.scss";
import { useFadeInThenBreath, useInViewOnce } from "@shared/hooks";

export function Block07() {
  const button = useFadeInThenBreath({ duration: 800 });
  const [ref] = useInViewOnce(1, () => {
    button.api.start();
  });
  return (
    <animated.div ref={ref} className={styles.block}>
      <animated.div className={styles.button} style={button.styles} />
    </animated.div>
  );
}
