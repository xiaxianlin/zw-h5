import { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";

export function ImageSwitchBox({
  duration,
  images,
  className,
}: {
  duration: number;
  images: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration },
    loop: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      {transitions((style, i) => (
        <animated.img
          src={images[i]}
          alt=""
          style={{
            ...style,
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
}
