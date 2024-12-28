import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { RESOURCE_URL, resources } from "./resource";
import { loadImage } from "@shared/utils/file";

const useAppContainer = () => {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    Promise.all(
      resources.map(async (url) => {
        try {
          await loadImage(`${RESOURCE_URL}/${url}`);
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
