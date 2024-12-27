import styles from "./index.module.scss";
// @ts-ignore
import OpenIcon from "./assets/open.svg?react";
// @ts-ignore
import CloseIcon from "./assets/close.svg?react";
import { animated, useSpringValue } from "@react-spring/web";
import { useRef, useState } from "react";

export default function Music() {
  const [open, setOpen] = useState(false);
  const opacity = useSpringValue(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleButton = () => {
    if (!open) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setOpen(!open);
  };
  return (
    <>
      <animated.div className={styles.button} style={{ opacity }} onClick={handleButton}>
        {open ? <OpenIcon /> : <CloseIcon />}
      </animated.div>
      <audio
        loop
        preload="auto"
        ref={audioRef}
        style={{ display: "none" }}
        src="/assets/bg.mp3"
        onCanPlay={() => {
          audioRef.current && (audioRef.current.volume = 0.5);
          opacity.start(1);
        }}
      />
    </>
  );
}
