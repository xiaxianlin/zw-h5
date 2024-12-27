import styles from "./index.module.scss";
import { AppModel } from "@apps/texture/model";
import { Block00 } from "./Block00";
import { Block01 } from "./Block01";
import { Block02 } from "./Block02";
import { Block03 } from "./Block03";
import { Block04 } from "./Block04";
import { Block05 } from "./Block05";
import { Block06 } from "./Block06";
import { Block07 } from "./Block07";
import { Loading } from "./Loading";
import { Music } from "./Music";
import { Modal } from "./Modal";

export function Texture() {
  return (
    <AppModel.Provider>
      <Loading />
      <div className={styles.container}>
        <Block00 />
        <Block01 />
        <Block02 />
        <Block03 />
        <Block04 />
        <Block05 />
        <Block06 />
        <Block07 />
      </div>
      <Music />
      <Modal />
    </AppModel.Provider>
  );
}
