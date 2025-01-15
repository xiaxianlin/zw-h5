import styles from "./index.module.scss";
import { animated, useSpringValue } from "@react-spring/web";
import { useEffect } from "react";
import clsx from "clsx";

export default function Music() {
  const opacity = useSpringValue(window.WeixinJSBridge ? 0 : 1);
  const music = document.getElementById("bgMusic") as HTMLAudioElement;

  const handleButton = async () => {
    opacity.start(0);
    music.volume = 0.5;
    music.play();
  };

  useEffect(() => {
    window.WeixinJSBridge?.invoke("getNetworkType", {}, handleButton, false);
  }, []);

  return <animated.div className={clsx(styles.button, styles.close)} style={{ opacity }} onClick={handleButton} />;
}
