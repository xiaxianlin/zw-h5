import { useState } from "react";
import { createContainer } from "unstated-next";

const useAppContainer = () => {
  const [visible, setVisible] = useState(false);

  return {
    ratio: window.screen.width / 750,
    visible,
    setVisible,
  };
};

export const AppModel = createContainer(useAppContainer);
export const useAppModel = AppModel.useContainer;
