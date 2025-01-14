import { useAppModel } from "@apps/texture/model";
import styles from "./index.module.scss";
import { animated } from "@react-spring/web";
import { useEffect } from "react";
import { useBlink, useFadeInAndSlideY } from "@shared/hooks";
import { RESOURCE_URL } from "../resource";
import { sleep } from "@shared/utils";

export function Block00() {
  const { loaded } = useAppModel();

  const title = useFadeInAndSlideY(30, { duration: 750 });
  const blink = useBlink({ duration: 500 });

  useEffect(() => {
    if (!loaded) return;
    (async () => {
      blink.api.start();
      await sleep(500);
      title.api.start();
    })();
  }, [loaded]);

  return (
    <div className="block">
      <div className="bg">
        <animated.img src={`${RESOURCE_URL}/block00/bg.png`} />
      </div>
      <div className="content">
        <animated.img className={styles.title} style={title.styles} src={`${RESOURCE_URL}/block00/title.png`} />
        <animated.img className={styles.blink} style={blink.styles} src={`${RESOURCE_URL}/block00/blink.png`} />
      </div>
    </div>
  );
}
