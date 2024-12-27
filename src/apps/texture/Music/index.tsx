import styles from "./index.module.scss";
// @ts-ignore
import CloseIcon from "./assets/close.svg?react";
import { animated, useSpringValue } from "@react-spring/web";
import { useRef } from "react";

export default function Music() {
  const opacity = useSpringValue(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleButton = async () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.muted = false;
      audioRef.current.play();
    }
    opacity.start(0);
  };
  return (
    <>
      <animated.div className={styles.button} style={{ opacity }} onClick={handleButton}>
        <CloseIcon />
      </animated.div>
      <audio
        loop
        muted
        playsInline
        preload="auto"
        ref={audioRef}
        src="/assets/bg.mp3"
        onCanPlay={() => opacity.start(1)}
        style={{ position: "fixed", zIndex: 0, opacity: 0 }}
      />
    </>
  );
}
