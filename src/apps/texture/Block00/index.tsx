import { useAppModel } from "@apps/texture/model";
import styles from "./index.module.scss";
import { animated } from "@react-spring/web";
import { useEffect } from "react";
import { useFadeInAndSlideY } from "@shared/hooks";
import { RESOURCE_URL } from "../resource";
import { sleep } from "@shared/utils";

export function Block00() {
  const { loaded } = useAppModel();

  const title = useFadeInAndSlideY(30, { duration: 750 });

  useEffect(() => {
    if (!loaded) return;
    (async () => {
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
      </div>
    </div>
  );
}
