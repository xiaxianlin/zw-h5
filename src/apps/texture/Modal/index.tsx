import "swiper/css";
import { QRCodeCanvas } from "qrcode.react";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { INFO_CONTENTS, POSTER_CONTENTS, images } from "./constants";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useAppModel } from "../model";
import { animated, useSpring, useSpringRef } from "@react-spring/web";
import { useBreath } from "@shared/hooks";
import html2canvas from "html2canvas";
import { RESOURCE_URL } from "../resource";
import { LoadingIcon } from "../Loading/icon";

type Props = {
  index: number;
  created: boolean;
  loading: boolean;
  onChange?: (index: number) => void;
  onCreate?: () => void;
};

const Info = ({ index, created, loading, onChange, onCreate }: Props) => {
  const info = useMemo(() => INFO_CONTENTS[index], [index]);
  const spring = useBreath({ auto: true, duration: 600 });
  return (
    <div className={clsx(styles.block, styles.info)} style={{ display: created ? "none" : "flex" }}>
      <div className={styles.bg}>
        <animated.img src={`${RESOURCE_URL}/block04/bg.png`} />
      </div>
      <div className={styles.content}>
        <div className={styles.tip}>向右滑动,确定后点击图片开始创作</div>
        <Swiper className={styles.image} onSlideChange={(swiper) => onChange?.(swiper.activeIndex)}>
          {images.map((i) => (
            <SwiperSlide key={i}>
              <animated.img src={`/resources/modal/x0${i}.png`} style={spring.styles} />
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
        <div className={styles.button} onClick={onCreate}>
          立即生成丝巾
        </div>
      </div>
      {loading && (
        <div className={styles.loaderWrapper}>
          <LoadingIcon />
          <p>海报生成中...</p>
        </div>
      )}
    </div>
  );
};

const Poster = forwardRef(({ index }: { index: number }, ref: any) => {
  const { ratio } = useAppModel();
  const poster = useMemo(() => POSTER_CONTENTS[index], [index]);
  return (
    <div ref={ref} className={clsx(styles.block, styles.poster)}>
      <div className={styles.bg}>
        <animated.img src={`${RESOURCE_URL}/block04/bg.png`} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>你的专属丝巾设计完成啦!</div>
        <div className={styles.desc}>这一刻，艺术因你而生。</div>
        <div className={styles.image}>
          <animated.img src={`/resources/modal/y0${index + 1}.png`} />
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
      </div>
    </div>
  );
});

export default function Modal() {
  const { visible } = useAppModel();
  const [index, setIndex] = useState(0);
  const [created, setCreaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const api = useSpringRef();
  const springs = useSpring({ ref: api, opacity: 0, scale: 0 });

  const domRef = useRef<HTMLDivElement>(null);

  const handleCreate = () => {
    setLoading(true);
    html2canvas(domRef.current!).then((canvas) => {
      setUrl(canvas.toDataURL("image/png"));
      setCreaded(true);
      setLoading(false);
    });
  };

  useEffect(() => {
    visible && api.start({ opacity: 1, scale: 1 });
  }, [visible]);

  return (
    <animated.div className={styles.wrapper} style={springs}>
      <div className={styles.body}>
        <Info index={index} created={created} loading={loading} onChange={setIndex} onCreate={handleCreate} />
        <Poster ref={domRef} index={index} />
        <div className={clsx(styles.block, styles.canvas)}>
          {url && <animated.img src={url} />}
          <div className={styles.close} onClick={() => setCreaded(false)} />
        </div>
      </div>
    </animated.div>
  );
}
