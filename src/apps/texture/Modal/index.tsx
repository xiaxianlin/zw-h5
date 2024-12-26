import "swiper/css";
import { useEffect, useMemo, useState } from "react";
import { INFO_CONTENTS, images } from "./constants";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useAppModel } from "../model";
import { animated, useSpring, useSpringRef } from "@react-spring/web";

export function Modal() {
  const { visible } = useAppModel();
  const [index, setIndex] = useState(0);
  const info = useMemo(() => INFO_CONTENTS[index], [index]);

  const api = useSpringRef();
  const springs = useSpring({
    ref: api,
    opacity: 0,
    scale: 0,
  });

  useEffect(() => {
    if (visible) {
      api.start({ opacity: 1, scale: 1 });
    } else {
      api.start({ opacity: 0, scale: 0 });
    }
  }, [visible]);

  return (
    <animated.div className={styles.mask} style={springs}>
      <div className={clsx(styles.body, styles.info)}>
        <div className={styles.tip}>向右滑动,确定后点击图片开始创作</div>
        <Swiper className={styles.image} onSlideChange={(swiper) => setIndex(swiper.activeIndex)}>
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.pager}>
          {images.map((_, i) => (
            <div
              key={i}
              className={clsx(styles.item, {
                [styles.active]: i === index,
              })}
            ></div>
          ))}
        </div>
        <div className={styles.title}>{info.title}</div>
        <div className={styles.intro}>{info.intro}</div>
        <div className={styles.button}>立即生成丝巾</div>
      </div>
    </animated.div>
  );
}
