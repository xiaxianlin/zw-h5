import "swiper/css";
import { forwardRef, useEffect, useRef, useState } from "react";
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
import header from "./assets/header.png?inline";
import desc from "./assets/desc.png?inline";
import x01 from "./assets/x01.png?inline";
import x02 from "./assets/x02.png?inline";
import x03 from "./assets/x03.png?inline";
import x04 from "./assets/x04.png?inline";
import x05 from "./assets/x05.png?inline";
import x06 from "./assets/x06.png?inline";
import z01 from "./assets/z01.png?inline";
import z02 from "./assets/z02.png?inline";
import z03 from "./assets/z03.png?inline";
import z04 from "./assets/z04.png?inline";
import z05 from "./assets/z05.png?inline";
import z06 from "./assets/z06.png?inline";

type Props = {
  index: number;
  created: boolean;
  loading: boolean;
  onChange?: (index: number) => void;
  onCreate?: () => void;
  onClose?: () => void;
};

const x = [x01, x02, x03, x04, x05, x06];
const z = [z01, z02, z03, z04, z05, z06];
const images = [1, 2, 3, 4, 5, 6];

const Info = ({ index, created, loading, onChange, onCreate, onClose }: Props) => {
  const spring = useBreath({ auto: true, duration: 600 });
  return (
    <div className={clsx(styles.block, styles.info)} style={{ display: created ? "none" : "flex" }}>
      <div className={styles.close} onClick={onClose} />
      <div className={styles.bg}>
        <animated.img src={bg} />
      </div>
      <div className={styles.content}>
        <animated.img className={styles.header} src={`${RESOURCE_URL}/modal/header.png`} />
        <Swiper className={styles.image} onSlideChange={(swiper) => onChange?.(swiper.activeIndex)}>
          {images.map((i) => (
            <SwiperSlide key={i}>
              <animated.img src={`${RESOURCE_URL}/modal/x0${i}.png`} style={spring.styles} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.pager}>
          {images.map((_, i) => (
            <div key={i} className={clsx(styles.item, { [styles.active]: i === index })}></div>
          ))}
        </div>
        <animated.img src={`${RESOURCE_URL}/modal/z0${index + 1}.png`} className={styles.intro} />
        <div className={styles.button} onClick={onCreate}>
          立即生成纹样
        </div>
      </div>
      {loading && (
        <div className={styles.loaderWrapper}>
          <LoadingIcon />
          <p>纹样生成中...</p>
        </div>
      )}
    </div>
  );
};

const Poster = forwardRef(({ index }: { index: number }, ref: any) => {
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
        <animated.img className={styles.header} src={header} crossOrigin="anonymous" />
        <animated.img className={styles.desc} src={desc} crossOrigin="anonymous" />
        <animated.img className={styles.image} src={x[index]} crossOrigin="anonymous" />
        <animated.img className={styles.intro} src={z[index]} crossOrigin="anonymous" />
        <div className={styles.qrcode}>
          <canvas id="qrcode" />
          <animated.img src={qrcode} crossOrigin="anonymous" />
        </div>
        <div className={styles.scan}>扫码定制您的宋韵纹样</div>
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
