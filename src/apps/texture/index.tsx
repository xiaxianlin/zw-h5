import "./index.scss";
import { Loading } from "./Loading";
import { AppModel } from "@apps/texture/model";
import Content from "./Content";
import Music from "./Music";
import { lazy, Suspense, useEffect } from "react";
import { setShareInfo } from "@shared/utils";

const Modal = lazy(() => import("./Modal"));

export function Texture() {
  useEffect(() => {
    setShareInfo();
  }, []);
  return (
    <AppModel.Provider>
      <Loading />
      <Content />
      <Suspense>
        <Modal />
      </Suspense>
      <Music />
    </AppModel.Provider>
  );
}
