import { type SpringConfig } from "@react-spring/web";

declare global {
  type AnmiateOptions = {
    auto?: boolean;
    times?: number;
    onFinish?: () => void;
  } & SpringConfig;
}

export {};
