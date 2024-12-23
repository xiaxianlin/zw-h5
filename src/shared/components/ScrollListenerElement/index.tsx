import { useEffect } from "react";

export function ScrollListenerElement({ children }: ElementProps) {
  useEffect(() => {
    const handler = (e: any) => {
      console.log(e.target.scroll);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return <>{children}</>;
}
