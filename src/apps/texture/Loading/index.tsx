import styles from "./index.module.scss";
import { animated, useSpring } from "@react-spring/web";
import { CircleProgress } from "@shared/components";

import img1 from "./assets/01.png";
import img2 from "./assets/02.png";
import img3 from "./assets/03.png";
import img4 from "./assets/04.png";
import img5 from "./assets/05.png";
import img6 from "./assets/06.png";
import { useEffect, useState } from "react";
import { useFadeOut } from "@shared/hooks";

const total = 32;
const images = [img1, img2, img3, img4, img5, img6];
const index = Math.floor(Math.random() * 6) + 1;

export function Loading() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  const progress = Math.floor((count * 100) / total);

  const loading = useFadeOut({ duration: 500, onFinish: () => setVisible(false) });

  const ratateStyles = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: { duration: 5000 },
  });

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(() => setCount((c) => c + 1));
    });
    observer.observe({ entryTypes: ["resource"] });
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <animated.div className={styles.wrapper} style={loading.styles}>
      <div className={styles.loading}>
        <CircleProgress
          size={200}
          stroke={12}
          progress={progress > 100 ? 100 : progress}
          onFinish={() => loading.api.start()}
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
        />
      </div>
    </animated.div>
  );
}
