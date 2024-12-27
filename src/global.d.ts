declare global {
  type AssetMap = Record<string, HTMLImageElement>;
  type AssetBlobMap = Record<string, string>;
  type AssetUrlMap = Record<string, string>;

  type AnimationTrigger = "entry" | "scroll";

  interface ElementProps {
    children?: React.ReactNode;
  }
}

declare module "alloyfinger" {
  interface AlloyFingerOptions {
    tap?: (event: TouchEvent) => void;
    doubletap?: (event: TouchEvent) => void;
    longtap?: (event: TouchEvent) => void;
    swipe?: (event: TouchEvent) => void;
    pan?: (event: TouchEvent) => void;
    pinch?: (event: TouchEvent) => void;
    rotate?: (event: TouchEvent) => void;
  }

  class AlloyFinger {
    constructor(element: HTMLElement, options: AlloyFingerOptions);
    destroy(): void;
  }

  export default AlloyFinger;
}

export {};
