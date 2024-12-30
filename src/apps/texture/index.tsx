import "./index.scss";
import { Loading } from "./Loading";
import { AppModel } from "@apps/texture/model";
import Content from "./Content";
import Music from "./Music";
import { lazy, Suspense } from "react";

const Modal = lazy(() => import("./Modal"));

export function Texture() {
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
