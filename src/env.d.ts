/// <reference types="@rsbuild/core/types" />
declare interface Window {
  WeixinJSBridge?: {
    invoke: (method: string, data: any, callback: (response: any) => void, flag?: boolean) => void;
    call: (method: string, data?: any) => void;
    on: (event: string, callback: (response: any) => void) => void;
  };
}
