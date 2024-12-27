import { animated } from "@react-spring/web";
import styles from "./index.module.scss";
import { useFadeInThenBreath, useInViewOnce } from "@shared/hooks";
import { useAppModel } from "../model";

export function Block07() {
  const { setVisible } = useAppModel();
  const button = useFadeInThenBreath({ duration: 800 });
  const [ref] = useInViewOnce(1, () => {
    button.api.start();
  });
  return (
    <div ref={ref} className="block bottom-block">
      <div className="bg">
        <animated.img src="https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources/block07/bg.png" />
      </div>
      <div className="content info-content">
        <animated.img
          src="https://ixxl.oss-cn-beijing.aliyuncs.com/zw_h5/resources/block07/button.png"
          className={styles.button}
          style={button.styles}
          onClick={() => setVisible(true)}
        />
      </div>
    </div>
  );
}
