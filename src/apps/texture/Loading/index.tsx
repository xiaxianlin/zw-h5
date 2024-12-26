import styles from "./index.module.scss";
import { animated, useSpring, useSpringValue } from "@react-spring/web";
import { useAppModel } from "@shared/models/AppModel";
import { CircleProgress } from "@shared/components";

import img1 from "./assets/01.png";
import img2 from "./assets/02.png";
import img3 from "./assets/03.png";
import img4 from "./assets/04.png";
import img5 from "./assets/05.png";
import img6 from "./assets/06.png";

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
          duration={2500}
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
          onFinish={() => opacity.start(0, { config: { duration: 500 }, onRest: () => setLoading(false) })}
        />
      </div>
    </animated.div>
  );
}
