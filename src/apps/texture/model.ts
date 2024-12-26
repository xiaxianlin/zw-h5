import { useState } from "react";
import { createContainer } from "unstated-next";

const useAppContainer = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const ratio = window.screen.width / 750;

  return {
    ratio,
    loading,
    visible,
    setLoading,
    setVisible,
  };
};

export const AppModel = createContainer(useAppContainer);
export const useAppModel = AppModel.useContainer;
