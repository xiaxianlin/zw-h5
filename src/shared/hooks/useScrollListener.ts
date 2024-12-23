import { useEffect, useState } from "react";

interface UseScrollListenerProps {
  point: number;
  onTrigger?: () => void;
}
export const useScrollListener = ({ point, onTrigger }: UseScrollListenerProps) => {
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    const handler = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (!trigger && scrollTop >= point) {
        setTrigger(true);
        onTrigger?.();
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [trigger, point]);
};
