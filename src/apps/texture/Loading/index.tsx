import styles from "./index.module.scss";
import { animated } from "@react-spring/web";
import { BlockProgress } from "@shared/components";

import { useFadeOut } from "@shared/hooks";
import { useAppModel } from "../model";
import { useState } from "react";
import { LoadingIcon } from "./icon";

export function Loading() {
  const [visible, setVisible] = useState(true);
  const { total, count } = useAppModel();

  const progress = Math.floor((count * 100) / total);

  const loading = useFadeOut({ duration: 500, onFinish: () => setVisible(false) });

  if (!visible) {
    return null;
  }

  return (
    <animated.div className={styles.wrapper} style={loading.styles}>
      <div className={styles.loading}>
        <LoadingIcon />
        <BlockProgress
          progress={progress > 100 ? 100 : progress}
          onFinish={() => {
            loading.api.start();
          }}
        />
      </div>
    </animated.div>
  );
}
