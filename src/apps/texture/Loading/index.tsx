import styles from "./index.module.scss";
import { animated, useSpringValue, useTransition } from "@react-spring/web";

import img1 from "./assets/01.png?inline";
import img2 from "./assets/02.png?inline";
import img3 from "./assets/03.png?inline";
import img4 from "./assets/04.png?inline";
import img5 from "./assets/05.png?inline";
import img6 from "./assets/06.png?inline";
import { useEffect, useState } from "react";
import { useProgress } from "@shared/hooks";
import { useAppModel } from "@shared/models/AppModel";

const images = [img1, img2, img3, img4, img5, img6];

export function Loading() {
  const { setLoading } = useAppModel();
  const [index, setIndex] = useState(0);

  const opacity = useSpringValue(1);

  const { progress, x } = useProgress(2000, {
    onFinish: () => {
      console.log("finished");
      opacity.start(0, { onRest: () => setLoading(false) });
    },
  });

  const transitions = useTransition(index, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: { duration: 500 },
    loop: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <animated.div className={styles.wrapper} style={{ opacity }}>
      <div className={styles.loading}>
        <div className={styles.icon}>
          {transitions((style, i) => (
            <animated.img
              src={images[i]}
              alt=""
              style={{
                ...style,
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
        <div className={styles.progress}>
          <animated.div style={{ width: x.to((x) => `${x}%`) }} />
        </div>
        <div className={styles.num}>{progress}%</div>
      </div>
    </animated.div>
  );
}
