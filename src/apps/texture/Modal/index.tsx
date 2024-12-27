import "swiper/css";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useMemo, useRef, useState } from "react";
import { INFO_CONTENTS, POSTER_CONTENTS, images } from "./constants";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useAppModel } from "../model";
import { animated, useSpring, useSpringRef } from "@react-spring/web";
import AlloyFinger from "alloyfinger-typescript";
import { downloadElement } from "@shared/utils/file";

export function Modal() {
  const { visible, ratio } = useAppModel();
  const [index, setIndex] = useState(0);
  const [created, setCreaded] = useState(false);
  const info = useMemo(() => INFO_CONTENTS[index], [index]);
  const poster = useMemo(() => POSTER_CONTENTS[index], [index]);

  const elementRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const api = useSpringRef();
  const springs = useSpring({ ref: api, opacity: 0, scale: 0 });

  useEffect(() => {
    visible && api.start({ opacity: 1, scale: 1 });
  }, [visible]);

  useEffect(() => {
    if (!buttonRef.current) return;

    const alloyFingerInstance = new AlloyFinger(buttonRef.current, {
      longTap: () => {
        downloadElement(elementRef.current, "poster.png");
      },
    });
    return () => alloyFingerInstance.destroy();
  }, [created]);

  return (
    <animated.div className={styles.wrapper} style={springs}>
      <div className={styles.body}>
        <div className={styles.info} style={{ display: created ? "none" : "flex" }}>
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
          <div className={styles.button} onClick={() => setCreaded(true)}>
            立即生成丝巾
          </div>
        </div>
        <div ref={elementRef} className={styles.poster} style={{ opacity: created ? 1 : 0 }}>
          <div className={styles.title}>你的专属丝巾设计完成啦!</div>
          <div className={styles.desc}>这一刻，艺术因你而生。</div>
          <div className={styles.image}>
            <img src={poster.image} alt="" />
          </div>
          <div className={styles.intro}>
            <p>你的选择与随机生成的创意</p>
            <p>成就了这条独特的莲花纹丝巾</p>
            <p>它象征着{poster.text[0]}</p>
            <p>{poster.text[1]}</p>
          </div>
          <div className={styles.qrcode}>
            <QRCodeCanvas value={window.location.href} size={72 * ratio} bgColor={"#ffffff"} fgColor={"#000000"} />
          </div>
          <div className={styles.scan}>扫码定制您的宋韵丝巾</div>
          <div className={styles.mask} ref={buttonRef} />
        </div>
      </div>
    </animated.div>
  );
}
