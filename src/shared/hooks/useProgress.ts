import { useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

export const useProgress = (
  duration: number,
  options?: {
    onFinish?: () => void;
  }
) => {
  const [progress, setProgress] = useState(0);
  const { x } = useSpring({ x: progress });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev == 100) {
          clearInterval(interval);
          options?.onFinish?.();
          return 100;
        }
        return prev + 1;
      });
    }, duration / 100);
    return () => clearInterval(interval);
  }, []);

  return { progress, x };
};