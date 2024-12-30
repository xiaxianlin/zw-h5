import "./index.scss";
import { Loading } from "./Loading";
import { AppModel } from "@apps/texture/model";
import Content from "./Content";
import Music from "./Music";
import { lazy } from "react";

const Modal = lazy(() => import("./Modal"));

export function Texture() {
  return (
    <AppModel.Provider>
      <Loading />
      <Content />
      <Modal />
      <Music />
    </AppModel.Provider>
  );
}
