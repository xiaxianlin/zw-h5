import styles from "./index.module.scss";
import { animated, useSpring } from "@react-spring/web";
import icon from "./assets/icon.png?inline";
export function LoadingIcon() {
  const ratateStyles = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: { duration: 5000 },
  });

  return (
    <div className={styles.icon}>
      <animated.img src={icon} style={{ ...ratateStyles, width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}
