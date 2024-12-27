import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { resources } from "./resource";
import { loadImage } from "@shared/utils/file";

const useAppContainer = () => {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Promise.all(
      resources.map(async (url) => {
        try {
          await loadImage(`/resources/${url}`);
          console.log("loaded -", url);
        } catch (error) {
          console.log(error);
        } finally {
          setCount((c) => c + 1);
        }
      })
    ).then(() => setLoaded(true));
  }, []);

  return {
    loaded,
    count,
    total: resources.length,
    ratio: window.screen.width / 750,
    visible,
    setVisible,
  };
};

export const AppModel = createContainer(useAppContainer);
export const useAppModel = AppModel.useContainer;
