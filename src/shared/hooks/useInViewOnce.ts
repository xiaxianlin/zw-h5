import { useInView } from "@react-spring/web";
import { useEffect } from "react";

export const useInViewOnce = (threshold: number | number[], trigger?: () => void) => {
  const [ref, inView] = useInView({ once: true, amount: threshold });

  useEffect(() => {
    inView && trigger?.();
  }, [inView]);

  return [ref];
};
