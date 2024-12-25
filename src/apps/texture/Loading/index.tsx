import styles from "./index.module.scss";
import { animated, useSpring, useSpringValue } from "@react-spring/web";
import { useAppModel } from "@shared/models/AppModel";
import { CircleProgress } from "@shared/components";

import img1 from "./assets/01.png?inline";
import img2 from "./assets/02.png?inline";
import img3 from "./assets/03.png?inline";
import img4 from "./assets/04.png?inline";
import img5 from "./assets/05.png?inline";
import img6 from "./assets/06.png?inline";

const images = [img1, img2, img3, img4, img5, img6];

export function Loading() {
  const { setLoading } = useAppModel();

  const index = Math.floor(Math.random() * 6) + 1;

  const opacity = useSpringValue(1);
  const ratateStyles = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: { duration: 5000 },
  });

  return (
    <animated.div className={styles.wrapper} style={{ opacity }}>
      <div className={styles.loading}>
        <CircleProgress
          size={200}
          stroke={12}
          duration={2000}
          center={
            <div className={styles.icon}>
              <animated.img
                src={images[index]}
                alt=""
                style={{
                  ...ratateStyles,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          }
          onFinish={() => opacity.start(0, { onRest: () => setLoading(false) })}
        />
      </div>
    </animated.div>
  );
}
