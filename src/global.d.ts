declare global {
  type AssetMap = Record<string, HTMLImageElement>;
  type AssetBlobMap = Record<string, string>;
  type AssetUrlMap = Record<string, string>;

  type AnimationTrigger = "entry" | "scroll";

  interface ElementProps {
    children?: React.ReactNode;
  }
}

export {};
