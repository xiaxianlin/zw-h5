import "./index.scss";
import { Loading } from "./Loading";
import { AppModel } from "@apps/texture/model";
import Content from "./Content";
import Modal from "./Modal";
import Music from "./Music";

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
