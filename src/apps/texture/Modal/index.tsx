import "swiper/css";
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
import QRCode from "qrcode";

import bg from "./assets/bg.png?inline";
import y01 from "./assets/y01.png?inline";
import y02 from "./assets/y02.png?inline";
import y03 from "./assets/y03.png?inline";
import y04 from "./assets/y04.png?inline";
import y05 from "./assets/y05.png?inline";
import y06 from "./assets/y06.png?inline";

type Props = {
  index: number;
  created: boolean;
  loading: boolean;
  onChange?: (index: number) => void;
  onCreate?: () => void;
  onClose?: () => void;
};

const y = [y01, y02, y03, y04, y05, y06];

const Info = ({ index, created, loading, onChange, onCreate, onClose }: Props) => {
  const info = useMemo(() => INFO_CONTENTS[index], [index]);
  const spring = useBreath({ auto: true, duration: 600 });

  return (
    <div className={clsx(styles.block, styles.info)} style={{ display: created ? "none" : "flex" }}>
      <div className={styles.close} onClick={onClose} />
      <div className={styles.bg}>
        <animated.img src={bg} />
      </div>
      <div className={styles.content}>
        <div className={styles.tip}>向右滑动,确定后点击图片开始创作</div>
        <Swiper className={styles.image} onSlideChange={(swiper) => onChange?.(swiper.activeIndex)}>
          {images.map((i) => (
            <SwiperSlide key={i}>
              <animated.img src={`${RESOURCE_URL}/modal/x0${i}.png`} style={spring.styles} />
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
  const poster = useMemo(() => POSTER_CONTENTS[index], [index]);
  const [qrcode, setQrcode] = useState("");

  useEffect(() => {
    QRCode.toCanvas(document.getElementById("qrcode")!, window.location.href, {
      margin: 0,
      errorCorrectionLevel: "H",
    }).then((canvas: any) => {
      setQrcode(canvas.toDataURL("image/png"));
    });
  }, [window.location.href]);

  return (
    <div ref={ref} className={clsx(styles.block, styles.poster)}>
      <div className={styles.bg}>
        <animated.img src={bg} crossOrigin="anonymous" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>你的专属丝巾设计完成啦!</div>
        <div className={styles.desc}>这一刻，艺术因你而生。</div>
        <div className={styles.image}>
          <animated.img src={y[index]} crossOrigin="anonymous" />
        </div>
        <div className={styles.intro}>
          <p>你的选择与随机生成的创意</p>
          <p>成就了这条独特的莲花纹丝巾</p>
          <p>它象征着{poster.text[0]}</p>
          <p>{poster.text[1]}</p>
        </div>
        <div className={styles.qrcode}>
          <canvas id="qrcode" />
          <animated.img src={qrcode} crossOrigin="anonymous" />
        </div>
        <div className={styles.scan}>扫码定制您的宋韵丝巾</div>
      </div>
    </div>
  );
});

export default function Modal() {
  const { visible, setVisible } = useAppModel();
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
    api.start({ opacity: +visible, scale: +visible });
  }, [visible]);

  return (
    <animated.div className={styles.wrapper} style={springs}>
      <div className={styles.body}>
        <Info
          index={index}
          created={created}
          loading={loading}
          onChange={setIndex}
          onCreate={handleCreate}
          onClose={() => setVisible(false)}
        />
        <Poster ref={domRef} index={index} />
        <div className={clsx(styles.block, styles.canvas)}>
          {url && <animated.img src={url} />}
          <div className={styles.close} onClick={() => setCreaded(false)} />
        </div>
      </div>
    </animated.div>
  );
}
