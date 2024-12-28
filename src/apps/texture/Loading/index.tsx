import styles from "./index.module.scss";
import { animated, useSpring } from "@react-spring/web";
import { CircleProgress } from "@shared/components";

import img3 from "./assets/icon.png?inline";
import { useFadeOut } from "@shared/hooks";
import { useAppModel } from "../model";
import { useState } from "react";

export function Loading() {
  const [visible, setVisible] = useState(true);
  const { total, count } = useAppModel();

  const progress = Math.floor((count * 100) / total);

  const loading = useFadeOut({ duration: 500, onFinish: () => setVisible(false) });

  const ratateStyles = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: { duration: 5000 },
  });

  if (total === count) {
    loading.api.start();
  }

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
                src={img3}
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
